var MSG = {
  title: "BIPES",
  blocks: "積木",
  files: "Files",
  shared: "Shared",
  device: "Device",
  linkTooltip: "儲存積木組並提供連結。",
  runTooltip: "於工作區中執行積木組所定義的程式。",
  badCode: "程式錯誤：\n%1",
  timeout: "超過最大執行數。",
  trashTooltip: "捨棄所有積木。",
  catLogic: "邏輯",
  catLoops: "迴圈",
  catMath: "數學式",
  catText: "文字",
  catLists: "列表",
  catColour: "顏色",
  catVariables: "變量",
  catFunctions: "流程",
  listVariable: "列表",
  textVariable: "文字",
  httpRequestError: "命令出現錯誤。",
  linkAlert: "透過此連結分享您的積木組：\n\n%1",
  hashError: "對不起，「%1」並未對應任何已保存的程式。",
  xmlError: "未能載入您保存的檔案。或許它是由其他版本的Blockly創建？",
  badXml: "解析 XML 時出現錯誤：\n%1\n\n選擇'確定'以放棄您的更改，或選擇'取消'以進一步編輯 XML。",
  saveTooltip: "Save blocks to file.",
  loadTooltip: "Load blocks from file.",
  notificationTooltip: "Notifications panel.",
  ErrorGET: "Unable to load requested file.",
  invalidDevice: "Invalid device.",
  languageTooltip: "Change language.",
  noToolbox: "The device has no toolbox set.",
  networkTooltip: "Connect through network (WebREPL, http).",
  serialTooltip: "Connect through serial/USB or Bluetooth (Web Serial API, https).",
  toolbarTooltip: "Show toolbar",
  wrongDevicePin: "Check pins, target device changed!",
  notDefined: "not defined",
  editAsFileValue: "Edit as a file",
  editAsFileTooltip: "Edit python code and save to device's filesystem.",
  forumTooltip: "Help forum.",
  accountTooltip: "Your projects and settings.",
  blocksLoadedFromFile: "Blocks loaded from file '%1'.",
  deviceUnavailable: "Device '%1' unavailable.",
  notConnected: "No connection to send data.",
  serialFroozen: "Serial connection is unresponsive.",
  notAvailableFlag: "$1 is not available on your browser.\r\nPlease make sure the $1 flag is enabled.",

//Blocks
  block_delay: "delay",
  seconds: "seconds",
  milliseconds: "milliseconds",
  microseconds: "microseconds",
  to: "to",
  setpin: "set output pin",
  pin: "pin",
  read_digital_pin: "read digital input",
  read_analog_pin: "read analog input",
  show_iot: "show on IoT tab",
  data: "value",
  set_rtc: "set date and time",
  get_rtc: "get date and time",
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
  wifi_scan: "scan wifi networks",
  wifi_connect: "connect to wifi network",
  wifi_name: "network name",
  wifi_key: "key/password",
  easymqtt_start: "EasyMQTT Start",
  easymqtt_publish: "EasyMQTT Publish Data",
  topic: "topic",
  session_id: "session ID",
  file_open: "open File",
  file_name: "file name",
  file_mode: "mode",
  file_binary: "open in binary mode",
  file_close: "close file",
  file_write_line: "write line to file",
  file_line: "line",
  try1: "try",
  exp1: "except",
  ntp_sync: "sync date and time with NTP",
  timezone: "timezone",
  project_info: "Project Info",
  project_info_author: "Author",
  project_info_desc: "Description",
  easymqtt_subscribe: "EasyMQTT subscribe to topic",
  when: "when",
  data_received: "is received",
  easymqtt_receive: "EasyMQTT receive data",
  relay: "relay",
  on: "turn on",
  off: "turn off",
  relay_on: "relay on pin",
  yes: "yes",
  no: "no",
  wait_for_data: "wait for data",
  dht_start: "Start DHT Sensor",
  dht_measure: "update DHT11/22 sensor reading",
  dht_temp: "get DHT11/22 temperature",
  dht_humi: "get DHT11/22 humidity",
  type: "type",

//Network
  net_http_get: "HTTP GET Request",
  net_http_get_status: "HTTP Status code",
  net_http_get_content: "HTTP Response content",

//Splash screen
  splash_welcome: "Welcome to BIPES!",
  splash_footer: "Do not show this screen again",
  splash_close: "Close",
  splash_message: "<p><b>BIPES: Block based Integrated Platform for Embedded Systems</B> allows text and block based programming for several types of embedded systems and Internet of Things modules using MicroPython, CircuitPython, Python or Snek. You can connect, program, debug and monitor several types of boards using network, USB or Bluetooth. Please check a list of <a href=https://bipes.net.br/wp/boards/>compatible boards here</a>. Compatible boards include STM32, ESP32, ESP8266, Raspberry Pi Pico and even Arduino.  <p><b>BIPES</b> is fully <a href=https://bipes.net.br/wp/development/>open source</a> and based on HTML and JavaScript, so no software install or configuration is needed and you can use it offline! We hope BIPES is useful for you and that you can enjoy using BIPES. If you need help, we now have a <a href=https://github.com/BIPES/BIPES/discussions>discussion forum</a>, where we also post <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>new features and announcements about BIPES</a>. Feel free to use it! Also, we invite you to use the forum to leave feedbacks and suggestions for BIPES!</p><p>Now you can easily load MicroPython on your ESP32 or ESP8226 to use with BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p> <p>Thank you from the BIPES Team!</p>"

  

};

//Toolbox categories
Blockly.Msg['CAT_TIMING'] = "Timing";
Blockly.Msg['CAT_MACHINE'] = "Machine";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensors";
Blockly.Msg['CAT_OUTPUTS'] = "Outputs / Actuators";
Blockly.Msg['CAT_COMM'] = "Communication";
Blockly.Msg['CAT_FILES'] = "Files";
Blockly.Msg['CAT_NET'] = "Network and Internet";
Blockly.Msg['CAT_CONTROL'] = "Control";
