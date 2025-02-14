/** Declaration file generated by dts-gen */

declare module "circomlibjs" {
  export class evmasm {
    constructor(...args: any[])

    add(...args: any[]): void

    addmod(...args: any[]): void

    address(...args: any[]): void

    and(...args: any[]): void

    balance(...args: any[]): void

    blockhash(...args: any[]): void

    byte(...args: any[]): void

    call(...args: any[]): void

    callcode(...args: any[]): void

    calldatacopy(...args: any[]): void

    calldataload(...args: any[]): void

    calldatasize(...args: any[]): void

    caller(...args: any[]): void

    callvalue(...args: any[]): void

    codecopy(...args: any[]): void

    codesize(...args: any[]): void

    coinbase(...args: any[]): void

    create(...args: any[]): void

    createTxData(...args: any[]): void

    delegatecall(...args: any[]): void

    difficulty(...args: any[]): void

    div(...args: any[]): void

    dup(...args: any[]): void

    eq(...args: any[]): void

    exp(...args: any[]): void

    extcodecopy(...args: any[]): void

    extcodesize(...args: any[]): void

    gas(...args: any[]): void

    gaslimit(...args: any[]): void

    gasprice(...args: any[]): void

    gt(...args: any[]): void

    invalid(...args: any[]): void

    iszero(...args: any[]): void

    jmp(...args: any[]): void

    jmpi(...args: any[]): void

    keccak(...args: any[]): void

    label(...args: any[]): void

    log0(...args: any[]): void

    log1(...args: any[]): void

    log2(...args: any[]): void

    log3(...args: any[]): void

    log4(...args: any[]): void

    lt(...args: any[]): void

    mload(...args: any[]): void

    mod(...args: any[]): void

    msize(...args: any[]): void

    mstore(...args: any[]): void

    mstore8(...args: any[]): void

    mul(...args: any[]): void

    mulmod(...args: any[]): void

    not(...args: any[]): void

    number(...args: any[]): void

    or(...args: any[]): void

    origin(...args: any[]): void

    pc(...args: any[]): void

    pop(...args: any[]): void

    push(...args: any[]): void

    return(...args: any[]): void

    returndatacopy(...args: any[]): void

    returndatasize(...args: any[]): void

    revert(...args: any[]): void

    sdiv(...args: any[]): void

    selfdestruct(...args: any[]): void

    sgt(...args: any[]): void

    sha3(...args: any[]): void

    shor(...args: any[]): void

    signextend(...args: any[]): void

    sload(...args: any[]): void

    slt(...args: any[]): void

    smod(...args: any[]): void

    sstore(...args: any[]): void

    staticcall(...args: any[]): void

    stop(...args: any[]): void

    sub(...args: any[]): void

    swap(...args: any[]): void

    timestamp(...args: any[]): void
  }

  export class smt_memdb {
    constructor(...args: any[])

    get(...args: any[]): void

    getRoot(...args: any[]): void

    multiDel(...args: any[]): void

    multiGet(...args: any[]): void

    multiIns(...args: any[]): void

    setRoot(...args: any[]): void
  }

  export function poseidon(inputs: any): any

  export function poseidon_slow(inputs: any): any

  export namespace babyjub {
    const A: any

    const Base8: any[]

    const D: any

    const Generator: any[]

    const order: any

    const p: any

    const subOrder: any

    function addPoint(a: any, b: any): any

    function inCurve(P: any): any

    function inSubgroup(P: any): any

    function mulPointEscalar(base: any, e: any): any

    function packPoint(P: any): any

    function unpackPoint(_buff: any): any

    namespace F {
      const R: any

      const Ri: any

      const bitLength: number

      const half: any

      const m: number

      const mask: any

      const n32: number

      const n64: number

      const n8: number

      const negone: any

      const nqr: any

      const nqr_to_t: any

      const one: any

      const p: any

      const s: number

      const sqrt_q: any

      const sqrt_s: number

      const sqrt_t: any

      const sqrt_tm1d2: any

      const sqrt_z: any

      const t: any

      const two: any

      const type: string

      const zero: any

      function add(...args: any[]): void

      function band(...args: any[]): void

      function bnot(...args: any[]): void

      function bor(...args: any[]): void

      function bxor(...args: any[]): void

      function div(...args: any[]): void

      function e(...args: any[]): void

      function eq(...args: any[]): void

      function exp(...args: any[]): void

      function fromRng(...args: any[]): void

      function fromRprBE(...args: any[]): void

      function fromRprBEM(...args: any[]): void

      function fromRprLE(...args: any[]): void

      function fromRprLEM(...args: any[]): void

      function geq(...args: any[]): void

      function gt(...args: any[]): void

      function idiv(...args: any[]): void

      function inv(...args: any[]): void

      function isZero(...args: any[]): void

      function land(...args: any[]): void

      function leq(...args: any[]): void

      function lnot(...args: any[]): void

      function lor(...args: any[]): void

      function lt(...args: any[]): void

      function mod(...args: any[]): void

      function mul(...args: any[]): void

      function mulScalar(...args: any[]): void

      function neg(...args: any[]): void

      function neq(...args: any[]): void

      function normalize(...args: any[]): void

      function pow(...args: any[]): void

      function random(...args: any[]): void

      function shl(...args: any[]): void

      function shr(...args: any[]): void

      function sqrt(a: any): any

      function sqrt_old(...args: any[]): void

      function square(...args: any[]): void

      function sub(...args: any[]): void

      function toRprBE(...args: any[]): void

      function toRprBEM(...args: any[]): void

      function toRprLE(...args: any[]): void

      function toRprLEM(...args: any[]): void

      function toString(...args: any[]): void
    }
  }

  export namespace eddsa {
    function packSignature(sig: any): any

    function pruneBuffer(_buff: any): any

    function prv2pub(prv: any): any

    function sign(prv: any, msg: any): any

    function signMiMC(prv: any, msg: any): any

    function signMiMCSponge(prv: any, msg: any): any

    function signPoseidon(prv: any, msg: any): any

    function unpackSignature(sigBuff: any): any

    function verify(msg: any, sig: any, A: any): any

    function verifyMiMC(msg: any, sig: any, A: any): any

    function verifyMiMCSponge(msg: any, sig: any, A: any): any

    function verifyPoseidon(msg: any, sig: any, A: any): any
  }

  export namespace mimc7 {
    function getConstants(seed: any, nRounds: any): any

    function getIV(seed: any): any

    function hash(_x_in: any, _k: any): any

    function multiHash(arr: any, key: any): any

    namespace F {
      const R: any

      const Ri: any

      const bitLength: number

      const half: any

      const m: number

      const mask: any

      const n32: number

      const n64: number

      const n8: number

      const negone: any

      const nqr: any

      const nqr_to_t: any

      const one: any

      const p: any

      const s: number

      const sqrt_q: any

      const sqrt_s: number

      const sqrt_t: any

      const sqrt_tm1d2: any

      const sqrt_z: any

      const t: any

      const two: any

      const type: string

      const zero: any

      function add(...args: any[]): void

      function band(...args: any[]): void

      function bnot(...args: any[]): void

      function bor(...args: any[]): void

      function bxor(...args: any[]): void

      function div(...args: any[]): void

      function e(...args: any[]): void

      function eq(...args: any[]): void

      function exp(...args: any[]): void

      function fromRng(...args: any[]): void

      function fromRprBE(...args: any[]): void

      function fromRprBEM(...args: any[]): void

      function fromRprLE(...args: any[]): void

      function fromRprLEM(...args: any[]): void

      function geq(...args: any[]): void

      function gt(...args: any[]): void

      function idiv(...args: any[]): void

      function inv(...args: any[]): void

      function isZero(...args: any[]): void

      function land(...args: any[]): void

      function leq(...args: any[]): void

      function lnot(...args: any[]): void

      function lor(...args: any[]): void

      function lt(...args: any[]): void

      function mod(...args: any[]): void

      function mul(...args: any[]): void

      function mulScalar(...args: any[]): void

      function neg(...args: any[]): void

      function neq(...args: any[]): void

      function normalize(...args: any[]): void

      function pow(...args: any[]): void

      function random(...args: any[]): void

      function shl(...args: any[]): void

      function shr(...args: any[]): void

      function sqrt(a: any): any

      function sqrt_old(...args: any[]): void

      function square(...args: any[]): void

      function sub(...args: any[]): void

      function toRprBE(...args: any[]): void

      function toRprBEM(...args: any[]): void

      function toRprLE(...args: any[]): void

      function toRprLEM(...args: any[]): void

      function toString(...args: any[]): void
    }
  }

  export namespace mimc_gencontract {
    const abi: {
      constant: boolean
      inputs: {
        name: string
        type: string
      }[]
      name: string
      outputs: {
        name: string
        type: string
      }[]
      payable: boolean
      stateMutability: string
      type: string
    }[]

    function createCode(seed: any, n: any): any
  }

  export namespace mimcsponge {
    function getConstants(seed: any, nRounds: any): any

    function getIV(seed: any): any

    function hash(_xL_in: any, _xR_in: any, _k: any): any

    function multiHash(arr: any, key: any, numOutputs: any): any
  }

  export namespace mimcsponge_gencontract {
    const abi: {
      constant: boolean
      inputs: {
        name: string
        type: string
      }[]
      name: string
      outputs: {
        name: string
        type: string
      }[]
      payable: boolean
      stateMutability: string
      type: string
    }[]

    function createCode(seed: any, n: any): any
  }

  export namespace pedersenHash {
    function getBasePoint(baseHashType: any, pointIdx: any): any

    function hash(msg: any, options: any): any
  }

  export namespace poseidon_gencontract {
    function createCode(nInputs: any): any

    function generateABI(nInputs: any): any
  }

  export namespace smt {
    class SMT {
      constructor(...args: any[])

      delete(...args: any[]): void

      find(...args: any[]): void

      insert(...args: any[]): void

      update(...args: any[]): void
    }

    class SMTMemDB {
      constructor(...args: any[])

      get(...args: any[]): void

      getRoot(...args: any[]): void

      multiDel(...args: any[]): void

      multiGet(...args: any[]): void

      multiIns(...args: any[]): void

      setRoot(...args: any[]): void
    }

    function loadFromFile(fileName: any): void

    function newMemEmptyTrie(): any
  }

  export namespace smt_hashes_mimc {
    function hash0(left: any, right: any): any

    function hash1(key: any, value: any): any

    namespace F {
      const R: any

      const Ri: any

      const bitLength: number

      const half: any

      const m: number

      const mask: any

      const n32: number

      const n64: number

      const n8: number

      const negone: any

      const nqr: any

      const nqr_to_t: any

      const one: any

      const p: any

      const s: number

      const sqrt_q: any

      const sqrt_s: number

      const sqrt_t: any

      const sqrt_tm1d2: any

      const sqrt_z: any

      const t: any

      const two: any

      const type: string

      const zero: any

      function add(...args: any[]): void

      function band(...args: any[]): void

      function bnot(...args: any[]): void

      function bor(...args: any[]): void

      function bxor(...args: any[]): void

      function div(...args: any[]): void

      function e(...args: any[]): void

      function eq(...args: any[]): void

      function exp(...args: any[]): void

      function fromRng(...args: any[]): void

      function fromRprBE(...args: any[]): void

      function fromRprBEM(...args: any[]): void

      function fromRprLE(...args: any[]): void

      function fromRprLEM(...args: any[]): void

      function geq(...args: any[]): void

      function gt(...args: any[]): void

      function idiv(...args: any[]): void

      function inv(...args: any[]): void

      function isZero(...args: any[]): void

      function land(...args: any[]): void

      function leq(...args: any[]): void

      function lnot(...args: any[]): void

      function lor(...args: any[]): void

      function lt(...args: any[]): void

      function mod(...args: any[]): void

      function mul(...args: any[]): void

      function mulScalar(...args: any[]): void

      function neg(...args: any[]): void

      function neq(...args: any[]): void

      function normalize(...args: any[]): void

      function pow(...args: any[]): void

      function random(...args: any[]): void

      function shl(...args: any[]): void

      function shr(...args: any[]): void

      function sqrt(a: any): any

      function sqrt_old(...args: any[]): void

      function square(...args: any[]): void

      function sub(...args: any[]): void

      function toRprBE(...args: any[]): void

      function toRprBEM(...args: any[]): void

      function toRprLE(...args: any[]): void

      function toRprLEM(...args: any[]): void

      function toString(...args: any[]): void
    }
  }

  export namespace smt_hashes_poseidon {
    function hash0(left: any, right: any): any

    function hash1(key: any, value: any): any

    namespace F {
      const R: any

      const Ri: any

      const bitLength: number

      const half: any

      const m: number

      const mask: any

      const n32: number

      const n64: number

      const n8: number

      const negone: any

      const nqr: any

      const nqr_to_t: any

      const one: any

      const p: any

      const s: number

      const sqrt_q: any

      const sqrt_s: number

      const sqrt_t: any

      const sqrt_tm1d2: any

      const sqrt_z: any

      const t: any

      const two: any

      const type: string

      const zero: any

      function add(...args: any[]): void

      function band(...args: any[]): void

      function bnot(...args: any[]): void

      function bor(...args: any[]): void

      function bxor(...args: any[]): void

      function div(...args: any[]): void

      function e(...args: any[]): void

      function eq(...args: any[]): void

      function exp(...args: any[]): void

      function fromRng(...args: any[]): void

      function fromRprBE(...args: any[]): void

      function fromRprBEM(...args: any[]): void

      function fromRprLE(...args: any[]): void

      function fromRprLEM(...args: any[]): void

      function geq(...args: any[]): void

      function gt(...args: any[]): void

      function idiv(...args: any[]): void

      function inv(...args: any[]): void

      function isZero(...args: any[]): void

      function land(...args: any[]): void

      function leq(...args: any[]): void

      function lnot(...args: any[]): void

      function lor(...args: any[]): void

      function lt(...args: any[]): void

      function mod(...args: any[]): void

      function mul(...args: any[]): void

      function mulScalar(...args: any[]): void

      function neg(...args: any[]): void

      function neq(...args: any[]): void

      function normalize(...args: any[]): void

      function pow(...args: any[]): void

      function random(...args: any[]): void

      function shl(...args: any[]): void

      function shr(...args: any[]): void

      function sqrt(a: any): any

      function sqrt_old(...args: any[]): void

      function square(...args: any[]): void

      function sub(...args: any[]): void

      function toRprBE(...args: any[]): void

      function toRprBEM(...args: any[]): void

      function toRprLE(...args: any[]): void

      function toRprLEM(...args: any[]): void

      function toString(...args: any[]): void
    }
  }
}
