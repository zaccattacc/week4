import detectEthereumProvider from "@metamask/detect-provider"
import { Strategy, ZkIdentity } from "@zk-kit/identity"
import { generateMerkleProof, Semaphore } from "@zk-kit/protocols"
import { providers } from "ethers"
import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Input, Stack, FormControl, Button } from "@chakra-ui/react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ChakraProvider } from '@chakra-ui/react'

interface IFormInput {
    name: string;
    age: number;
    address: string;
}

const schema = yup.object({
    name: yup.string().required(),
    age: yup.number().positive().integer().required(),
    address: yup.string().required()
}).required();

export default function Home() {
    const [logs, setLogs] = React.useState("Connect your wallet and greet!")
    const [sentGreet, setSentGreet] = React.useState('Your Greeting will appear here!')

    async function greet() {
        setLogs("Creating your Semaphore identity...")

        const provider = (await detectEthereumProvider()) as any

        await provider.request({ method: "eth_requestAccounts" })

        const ethersProvider = new providers.Web3Provider(provider)
        const signer = ethersProvider.getSigner()
        const message = await signer.signMessage("Sign this message to create your identity!")

        const identity = new ZkIdentity(Strategy.MESSAGE, message)
        const identityCommitment = identity.genIdentityCommitment()
        const identityCommitments = await (await fetch("./identityCommitments.json")).json()

        const merkleProof = generateMerkleProof(20, BigInt(0), identityCommitments, identityCommitment)

        setLogs("Creating your Semaphore proof...")

        const greeting = "Hello world"

        const witness = Semaphore.genWitness(
            identity.getTrapdoor(),
            identity.getNullifier(),
            merkleProof,
            merkleProof.root,
            greeting
        )

        const { proof, publicSignals } = await Semaphore.genProof(witness, "./semaphore.wasm", "./semaphore_final.zkey")
        const solidityProof = Semaphore.packToSolidityProof(proof)

        const response = await fetch("/api/greet", {
            method: "POST",
            body: JSON.stringify({
                greeting,
                nullifierHash: publicSignals.nullifierHash,
                solidityProof: solidityProof
            })
        })


        if (response.status === 500) {
            const errorMessage = await response.text()

            setLogs(errorMessage)
        } else {
            setLogs("Your anonymous greeting is onchain :)")
            const greetMessage = await response.text()
            setSentGreet(greetMessage)
        }
    }

    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    function Form(){
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <FormControl>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            render={({ field }) => 
                                <div>
                                    <Input {...field} placeholder="Name"/>
                                    <p>{errors.name?.message}</p>
                                </div>
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <Controller 
                            name="age"
                            control={control}
                            defaultValue={0}
                            render={({ field }) => 
                                <div>
                                    <Input {...field} placeholder="Age"/>      
                                    <p>{errors.age?.message}</p>
                                </div>
                            }
                        />
                        
                    </FormControl>
                    
                    <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        render={({ field }) =>
                            <div> 
                                <Input {...field} placeholder="Address"/>
                                <p>{errors.address?.message}</p>
                            </div>
                        }
                    />
                    <Button type="submit">Submit</Button>
                </Stack>
                
            </form>
        )
    }



    return (
        <div className={styles.container}>
            <Head>
                <title>Greetings</title>
                <meta name="description" content="A simple Next.js/Hardhat privacy application with Semaphore." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Greetings</h1>

                <p className={styles.description}>A simple Next.js/Hardhat privacy application with Semaphore.</p>

                <div className={styles.logs}>{logs}</div>

                <div onClick={() => greet()} className={styles.button}>
                    Greet
                </div>

                <div style={{padding: "20px 0px"}}>
                    <ChakraProvider>
                        <Form />
                        <Input placeholder={sentGreet} isReadOnly={true} />
                    </ChakraProvider>
                </div>

                
            </main>
        </div>
    )
}
