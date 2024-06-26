const app = require("./server");
const upload = require("./multerConfig");

const {
  createSales,
  getSales,
  deleteSales,
  getBillItem,
} = require("./salesModule/dataController");

const { createRazor, getRazor } = require("./razorpayModule/dataController");

const {
  createQuotation,
  getQuotation,
  deleteItem,
} = require("./quotationModule/dataController");

const {
  getLogin,
  createMpin,
  getMpin,
  sendMpin,
  updateMpin,
  getDetailById,
  checkEmail,
} = require("./loginModules/dataController");

const {
  createInventory,
  getInventory,
  getListItem,
  deleteListItem,
  updateItem,
  getUnique,
} = require("./inventoryModule/dataController");

const {
  createBuyerSupplier,
  getBuyersSuppliers,
} = require("./buyerSupplierModule/dataController");

const {
  createExpense,
  getExpense,
  createCash,
  getCash,
  deleteExpItem,
} = require("./accountsModule/dataController");

const { messageCreate } = require("./messagin/Messaging");

const {
  getApi,
  genrateIRN,
  cancelIRN,
  getIRN,
  saveIRN,
  getIRNdata,
  genrateEway,
  genrateEwayIrn,
  genrateImvMovement,
  genrateAddMultiVehicles,
  genrateChangeMultiVehicles,
  genrateGenConsolidatedEwayBill,
  getConsEwayBill,
  updateVehicleNumber,
  cancelEwayBill,
  rejectEwayBill,
  updateTransporter,
  extendValidity,
  ewayBillDetails,
  otherPartyEWayBill,
  ewayGenConsigner,
  ewayBillRejectedByDate,
  ewayBillByDate
} = require("./gstEInvoiceModule/dataController");

 app.post("/e-invoice", getApi);
 app.post("/generate-invoice", genrateIRN);
 app.post("/generate-imv-movement",genrateImvMovement);
 app.post("/add/multi-vehicles",genrateAddMultiVehicles);
 app.post("/generate-change-multi-vehicles",genrateChangeMultiVehicles);
 app.post("/generate-gen-cons-ewaybill",genrateGenConsolidatedEwayBill);
app.post("/api/eway/update-partb/vehicle-number",updateVehicleNumber);
app.post("/api/eway/enhanced/cancel",cancelEwayBill);
app.post("/api/eway/enhanced/reject",rejectEwayBill);
app.post("/api/eway/enhanced/update-transporter",updateTransporter);
app.post("/api/eway/enhanced/extend",extendValidity);
app.post("/get/api/eway/enhanced/details", ewayBillDetails);
app.post("/get/api/eway/enhanced/other-parties", otherPartyEWayBill);
app.post("/get/api/eway/enhanced/bills-generated-consigner", ewayGenConsigner);
app.post("/get/api/eway/enhanced/bills-by-date", ewayBillByDate);
app.post("/get/api/eway/enhanced/bills-rejected-by-date", ewayBillRejectedByDate);
app.get("/get-cons-eway-bil", getConsEwayBill);
app.post("/generate-eway-bill", genrateEway);
app.post("/irn/generate-eway-bill", genrateEwayIrn);
app.post("/cancel-irn", cancelIRN);
app.post("/get-irn", getIRN);
app.post("/save-irn", saveIRN);
app.get("/all-irn-generated", getIRNdata);
app.post("/sendBill", messageCreate);
app.post("/sales", createSales);
app.get("/sales", getSales);
app.get("/bill-generated/:uniqueCode", getBillItem);
app.get("/find-item/:uniqueCode", getUnique);
app.post("/buyers-suppliers", createBuyerSupplier);
app.get("/buyers-suppliers", getBuyersSuppliers);
app.delete("/sales/delete/:id", deleteSales);
app.post("/order", createRazor);
app.get("/payment/transactions", getRazor);
app.post("/quotation", createQuotation);
app.get("/quotation", getQuotation);
app.delete("/quotation/delete/:id", deleteItem);
app.post("/", getLogin);
app.get("/", sendMpin);
app.post("/set-mpin", createMpin);
app.post("/mpin", getMpin);
app.get("/mpin", sendMpin);
app.put("/set-mpin", updateMpin);
app.put("/reset-password/:id", getDetailById);
app.post("/forgot-password", checkEmail);
app.post("/inventory", upload.single("file"), createInventory);
app.get("/inventory", getInventory);
app.get("/bills/:id", getListItem);
app.delete("/inventory/delete/:id", deleteListItem);
app.put("/inventory/update/:id", upload.single("file"), updateItem);
app.post("/accounts/expense", createExpense);
app.get("/accounts/expense", getExpense);
app.post("/accounts/cash", createCash);
app.get("/accounts/cash", getCash);
app.delete("/expense/delete/:id", deleteExpItem);

module.exports = app;