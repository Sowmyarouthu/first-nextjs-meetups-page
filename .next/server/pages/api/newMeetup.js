"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/newMeetup";
exports.ids = ["pages/api/newMeetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/newMeetup.js":
/*!********************************!*\
  !*** ./pages/api/newMeetup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0\");\n        const db = client.db();\n        const meetupCollection = db.collection(\"meetups\");\n        const result = await meetupCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"meetup Inserted\"\n        });\n    }\n    if (req.method === \"GET\") {\n        console.log(\"inside get\");\n        const client1 = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://sowmyasindhurouthu:6wkb1x8NfajHkYno@cluster0.cvwck.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0\");\n        const db1 = client1.db();\n        const meetupCollection1 = db1.collection(\"meetups\");\n        const result1 = await meetupCollection1.find().toArray();\n        console.log(result1);\n        client1.close();\n        res.status(200).json({\n            message: \"Fetched Successfully\",\n            data: result1\n        });\n        return result1;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3TWVldHVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUVyQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0lBQzlDLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBQztRQUNyQixNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUNyQixNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQUMsbUlBQW1JLENBQUM7UUFDN0ssTUFBTVMsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUN0QixNQUFNQyxnQkFBZ0IsR0FBSUQsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2xELE1BQU1DLE1BQU0sR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csU0FBUyxDQUFDUixJQUFJLENBQUM7UUFDckRTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUMsQ0FBQztRQUNwQkwsTUFBTSxDQUFDUyxLQUFLLEVBQUUsQ0FBQztRQUNmYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBQyxpQkFBaUI7U0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQUdqQixHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUM7UUFDcEJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLE1BQU1SLE9BQU0sR0FBRyxNQUFNUCx3REFBbUIsQ0FBQyxtSUFBbUksQ0FBQztRQUM3SyxNQUFNUyxHQUFFLEdBQUdGLE9BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBQ3RCLE1BQU1DLGlCQUFnQixHQUFJRCxHQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDbEQsTUFBTUMsT0FBTSxHQUFJLE1BQU1GLGlCQUFnQixDQUFDVSxJQUFJLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFO1FBQ3ZEUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTSxDQUFDLENBQUM7UUFDcEJMLE9BQU0sQ0FBQ1MsS0FBSyxFQUFFLENBQUM7UUFDZmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsc0JBQXNCO1lBQUNkLElBQUksRUFBRU8sT0FBTTtTQUFDLENBQUMsQ0FBQztRQUNwRSxPQUFPQSxPQUFNLENBQUM7SUFFbEIsQ0FBQztBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ld01lZXR1cC5qcz9iMzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vc293bXlhc2luZGh1cm91dGh1OjZ3a2IxeDhOZmFqSGtZbm9AY2x1c3RlcjAuY3Z3Y2subW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMCcpO1xyXG4gICAgY29uc3QgZGI9ICBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTonbWVldHVwIEluc2VydGVkJ30pO1xyXG59XHJcbmlmKHJlcS5tZXRob2QgPT09ICdHRVQnKXtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGdldFwiKTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vc293bXlhc2luZGh1cm91dGh1OjZ3a2IxeDhOZmFqSGtZbm9AY2x1c3RlcjAuY3Z3Y2subW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMCcpO1xyXG4gICAgY29uc3QgZGI9ICBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOidGZXRjaGVkIFN1Y2Nlc3NmdWxseScsZGF0YTogcmVzdWx0fSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgXHJcbn1cclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmluZCIsInRvQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/newMeetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newMeetup.js"));
module.exports = __webpack_exports__;

})();