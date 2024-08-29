const Axios = require("axios");

exports.getNewsData = async (req, res) => {
  try {
    const token = 'cit77t1r01qsbf80otkgcit77t1r01qsbf80otl0';
    const url = `https://finnhub.io/api/v1/news?category=general&token=${token}`;

    const response = await Axios.get(url);
    return res.status(200).json({
      status: "success",
      data: response.data,
    });
  } catch (error) {
    return res.status(200).json({
      status: "fail",
    });
  }
};
