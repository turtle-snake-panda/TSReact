// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################


var devices = [
  ["1", "8945782343432", "Minerva1", "Niger","128","64"],
  ["2", "8945782343435", "Minerva2", "Curaçao","128","64"],
  ["3", "8945782343436", "Minerva3", "Netherlands","128","64"],
  ["4", "8945782343437", "Minerva4", "South","128","64"]
];
// var devices = [
//   {id:"1", IMEI:"8945782343432", name:"Minerva1", address:"Niger",mo_byte:"128",mt_byte:"64"},
//   {id:"2", IMEI:"8945782343435", name:"Minerva2", address:"Curaçao",mo_byte:"128",mt_byte:"64"},
//   {id:"3", IMEI:"8945782343436", name:"Minerva3", address:"Netherlands",mo_byte:"128",mt_byte:"64"},
//   {id:"4", IMEI:"8945782343437", name:"Minerva4", address:"South",mo_byte:"128",mt_byte:"64"}
// ];

var call_nums = [
["1", "19874503453432","Msironamerica","Nigerafrica", "38","45"],
["2", "1987450346564","Nidfafrica", "Curaçao-America","89", "56"],
["3", "1987450347345", "Husfasia","Netherlands-Eruopan","142","89"],
["4", "1987450349123","Tuen", "SouthAustrila","35", "98"]
];

// var call_nums = [
//   {id:"1", cellnumber:"8945782343432", name:"Minerva1", address:"Niger",sms_out:"128",sms_in:"64"},
//   {id:"2", cellnumber:"8945782343435", name:"Minerva2", address:"Curaçao",sms_out:"128",sms_in:"64"},
//   {id:"3", cellnumber:"8945782343436", name:"Minerva3", address:"Netherlands",sms_out:"128",sms_in:"64"},
//   {id:"4", cellnumber:"8945782343437", name:"Minerva4", address:"South",sms_out:"128",sms_in:"64"}
// ];

// var server = [
//   "Lines From Great Russian Literature? Or E-mails From My Boss?",
//   "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
//   'Sign contract for "What are conference organizers afraid of?"'
// ];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  devices,
  call_nums,
  // server
};
