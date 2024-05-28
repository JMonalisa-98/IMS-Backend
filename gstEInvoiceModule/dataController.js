const axios = require("axios");
const einvoiceModel = require("./schema");

exports.getApi = async (req, res) => {
  const url =
    "https://staging.fynamics.co.in/api/einvoice/enhanced/authentication";
  const data = {
    Username: req.body.Username,
    Password: req.body.Password,
    ForceRefreshAccessToken: false,
  };

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    Gstin: req.body.gstin,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.genrateIRN = async (req, res) => {
  const url =
    "https://staging.fynamics.co.in/api/einvoice/enhanced/generate-irn";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.genrateEway = async (req, res) => {
  const url = "https://staging.fynamics.co.in/api/eway/enhanced/generate";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.genrateEwayIrn = async (req, res) => {
  const url =
    "https://staging.fynamics.co.in/api/eway/enhanced/generate-by-irn";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.genrateImvMovement = async (req, res) => {
  const url =
    "https://staging.fynamics.co.in/api/eway/enhanced/initiate-multi-vehicle";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.updateVehicleMovement = async (req, res) => {
  const url = "https://staging.fynamics.co.in/api/eway/enhanced/update-partb";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.genrateAddMultiVehicles = async (req, res) => {
  const url =
    "https://staging.fynamics.co.in/api/eway/enhanced/add-multi-vehicles";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.genrateChangeMultiVehicles = async (req, res) => {
  const url =
    "https://staging.fynamics.co.in/api/eway/enhanced/change-multi-vehicles";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.genrateGenConsolidatedEwayBill = async (req, res) => {
  const url =
    "https://staging.fynamics.co.in/api/eway/enhanced/generate-consolidated";
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.getConsEwayBill = async (req, res) => {
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/get-consolidated/${tripSheetNo}`;
  const data = req.body.formData;

  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .get(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.cancelIRN = async (req, res) => {
  const data = {
    Irn: req.body.irnNumber,
    CnlRsn: "1",
    CnlRem: "Wrong entry",
  };
  const url = `https://staging.fynamics.co.in/api/einvoice/enhanced/cancel-irn`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.getIRN = async (req, res) => {
  const url = `https://staging.fynamics.co.in/api/einvoice/enhanced/get-irn/${req.body.irnNumber}`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .get(url, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.cancelEwayBill = async (req, res) => {
  const data = req.body.formData;
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/cancel`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.rejectEwayBill = async (req, res) => {
  const data = req.body.formData;
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/reject`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.updateTransporter = async (req, res) => {
  const data = req.body.formData;
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/update-transporter`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.extendValidity = async (req, res) => {
  const data = req.body.formData;
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/extend`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.ewayBillDetails = async (req, res) => {
  const data = req.body.formData;
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/details/${data}`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    AuthToken: req.body.auth.authToken,
    user_name: req.body.auth.Username,
    sek: req.body.auth.Sek,
  };

  axios
    .get(url, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.otherPartyEWayBill = async (req, res) => {
  console.log(req.body);
  const data = req.body.formData;
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/other-parties/${data}`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    authtoken: req.body.auth.authToken,
    sek: req.body.auth.Sek,
  };

  axios
    .get(url, { headers })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.ewayGenConsigner = async (req, res) => {
  const { docType, docNo } = req.body.formData;
  const url = `https://staging.fynamics.co.in/api/eway/enhanced/bills-generated-consigner/${docType}/${docNo}`;
  const headers = {
    Authorization: `Bearer ${process.env.FYN_TOKEN}`,

    gstin: req.body.auth.gst,
    authtoken: req.body.auth.authToken,
    sek: req.body.auth.Sek,
  };

  axios
    .get(url, { headers })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.saveIRN = async (req, res) => {
  try {
    const newItem = new einvoiceModel(req.body);
    await newItem.save();

    res.status(201).json({ message: "Item created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getIRNdata = async (req, res) => {
  await einvoiceModel
    .find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
