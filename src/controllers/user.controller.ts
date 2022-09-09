import UserService from '@/services/user.service'

const controller: RestfulController = {}

controller.index = async (req, res) => {
  const { data, meta } = await UserService.listAllUsers({
    limit: req.query.limit as string,
    offset: req.query.offset as string
  })

  res.status(200).json({ data, meta })
}

export default controller
