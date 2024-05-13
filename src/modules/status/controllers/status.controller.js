const StatusController = {
  getStatus: (req, res) => {
    res.status(200).json({
      success: true,
      data: {
        status: "UP",
        timestamp: new Date(),
      },
    });
  },
};
export default StatusController;