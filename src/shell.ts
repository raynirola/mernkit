import execute from 'exec-sh'

const getPWD = async () => {
  return await execute.promise('pwd', true)
}

export default { getPWD }
