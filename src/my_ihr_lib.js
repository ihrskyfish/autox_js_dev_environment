



// NOTE  this version can not directly set a value  in a non-exist key in a object

var __globalIhrglobal = {};
var __globalAll_gesture = {};
// 导入自定义模块
// const myModule = require('./myModule');
__globalIhrglobal.x_width = device.width;
__globalIhrglobal.y_high = device.height;
__globalIhrglobal.x_dpi = 225;
__globalIhrglobal.y_dpi = 222;
__globalIhrglobal.screen_size = 10.1;
__globalIhrglobal.miykstring = {};
__globalIhrglobal.myPhone = {};


// here need  human do it BEGIN
__globalIhrglobal.myPhone.xiaomi = "c804e69518e0c93d"
__globalIhrglobal.myPhone.xiaomi10 = "f138246cceb63b2c"
__globalIhrglobal.myPhone.vivoS10 = "63476539d7ebf0b7"
__globalIhrglobal.myPhone.sp1228 = "d0b70f6e227bd2bf"
__globalIhrglobal.myPhone.leidian = "5d2baf301fc3b11"
// here need human do it END
__globalIhrglobal.myPhone.leidian1 = "default"
__globalIhrglobal.myPhone.leidian1 = "default"
__globalIhrglobal.myPhone.default = "default"

__globalIhrglobal.config = {}
__globalIhrglobal.config[__globalIhrglobal.myPhone.sp1228] = {}
__globalIhrglobal.config[__globalIhrglobal.myPhone.sp1228]["sleep_time"] = 1000 * 2;

__globalIhrglobal.config[__globalIhrglobal.myPhone.leidian] = {}
__globalIhrglobal.config[__globalIhrglobal.myPhone.leidian]["sleep_time"] = 1000 * 10;
__globalIhrglobal.config[__globalIhrglobal.myPhone.leidian]["__enumKillWay"] = "root";

const configVisoS10 = __globalIhrglobal.config[__globalIhrglobal.myPhone.vivoS10];
__globalIhrglobal.config[__globalIhrglobal.myPhone.vivoS10] = {}
__globalIhrglobal.config[__globalIhrglobal.myPhone.vivoS10]["sleep_time"] = 1000 * 2;
__globalIhrglobal.config[__globalIhrglobal.myPhone.vivoS10].x_width = 1080;
__globalIhrglobal.config[__globalIhrglobal.myPhone.vivoS10].y_width = 2400;
__globalIhrglobal.config[__globalIhrglobal.myPhone.vivoS10].x_dpi = 408;
// __globalIhrglobal.config[__globalIhrglobal.myPhone.vivoS10].x_dpi = x_dpi;

const __globalXiaomi = __globalIhrglobal.myPhone.xiaomi;
const __globalVivoS10 = __globalIhrglobal.myPhone.vivoS10;
const __globalDefaultPhone = __globalIhrglobal.myPhone.default;

__globalIhrglobal.miykstring.sleep_time_default_this_devices = 1000 * 2;
__globalIhrglobal.miykstring.__emunKillWay = "manyBacks";
__globalIhrglobal.miykstring.__emunKillWay = "gesture";
__globalIhrglobal.miykstring.currentDevices__emunMyPhoneList = ihrGetAndroidId();

function ihrGetAndroidId() {
    if (device.getAndroidId() == __globalIhrglobal.myPhone.xiaomi10) {
        console.log("xiaomi0 as xiaomi");
        return __globalIhrglobal.myPhone.xiaomi;
    }


    console.log("normal android id");
    return device.getAndroidId();
}

__globalIhrglobal.miykstring.__emunLanchWay = "launchApi";
__globalIhrglobal.dev_stage = "test";

// the builtin api has a bug because the android ues ppi to rander
// setScreenMetrics(ihrglobal.x_width, ihrglobal.y_high);

// ths gesture function can be used in xiaomi phone in 快手刷视频
function autojs_builtin_click(x, y) {
    return click(x, y);
}


function gesture__universal_click_xCenter_manyTime_10even_y() {
    const howManyEven = 100;
    for (let index = 1; index < howManyEven; index++) {
        sleep_certian_time();
        let x_start = __globalIhrglobal.x_width / 2;
        let y_start = __globalIhrglobal.y_high * index / howManyEven;
        click(x_start, y_start);
        infomation_dev_by_toast_on_autojs("" + x_start + " " + y_start);
    }
}

function gesture__universal_swipe_up_in_xCenter2() {
    swipe(__globalIhrglobal.x_width / 2, __globalIhrglobal.y_high * 2 / 4, __globalIhrglobal.x_width / 2, __globalIhrglobal.y_high / 8, 100);
}



function gesture__universal_swipe_up_in_xCenter0() {
    swipe(__globalIhrglobal.x_width / 2, __globalIhrglobal.y_high * 3 / 4, __globalIhrglobal.x_width / 2, __globalIhrglobal.y_high / 4, 100);
}



// ---file: gesture.js @@interface@@ this fs file should define the function named 
function gesture__click_treasure_position() {
    // let dict6 = object.create(null);
    // dict6.key1 = 'value1';
    // dict6.key2 = 'value2';
    // let dict5 = {
    //     key1: 'value1',
    //     key2: 'value2'
    // };
    // let dict3 = new object();
    // dict3['key1'] = 'value1';
    // dict3.key2 = 'value2';

    let __classfunctionmap2 = {};
    __classfunctionmap2[__globalIhrglobal.myPhone.default] = function () {
        let x_start = __globalIhrglobal.x_width * 0.877193;
        let y_start = __globalIhrglobal.x_width * 0.891167;
        click(x_start, y_start);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.vivoS10] = function () {
        let x_start = device.width * 0.877193;
        let y_start = device.height * 0.891167;
        click(x_start, y_start);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.xiaomi] = function () {
        let x_start = device.width * 0.877193;
        let y_start = device.height * 0.891167;
        click(x_start, y_start);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.leidian] = function () {
        let x_start = 830;
        let y_start = 1800;
        click(x_start, y_start);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.sp1228] = function () {
        let x_start = 1040;
        let y_start = 1600;
        click(x_start, y_start);
    }
    if (__classfunctionmap2[__globalIhrglobal.miykstring.currentDevices__emunMyPhoneList]) {
        __classfunctionmap2[__globalIhrglobal.miykstring.currentDevices__emunMyPhoneList]();
    } else if (__classfunctionmap2[__globalIhrglobal.myPhone.default]) {
        __classfunctionmap2[__globalIhrglobal.myPhone.default]();
    }
    else {
        console.log("function not found");
    }
}

function gesture__click_the_quvrqm_posision() {

    function __by_widget() {
        className("androidx.appcompat.app.ActionBar$c").desc("去赚钱").findOne().click()
    }

    __by_widget();
}


function autojs_builtin_log(text) {
    log(text);
}

function gesture_kill_current_app_on_the_recents_page() {
    //after failing , find that  the kill current app  on the recents page need a certain speed.whic is not supported in the leidian player 
    function __on_leidian_player() {
        // getsture_kill_current_app_on_the_recents_page_on_leidianPlayer__autojs_function();
        function __by_touch_file() {
            let password_string = "/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
            let result = shell("touch " + password_string, false);
            autojs_builtin_log(result);
            // console.show();

            if (result.code == 0) {
                toast("执行成功");
            } else {
                toast("执行失败！请到控制台查看错误信息");
            }



        }


        function __by_builtinApi_create_file(file_path) {
            let password_string = "/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp";
            file_path = file_path || password_string;
            ensure_file_content(file_path, "");
        }

        function __by_builtinApi_swipe(x_start, y_start, x_end, y_end, duration) {
            duration = duration || 2000;
            let x_start = 500;
            let y_start = 2000;
            // y_start = 1800;
            let x_end = x_start - 400;
            // y_end = 1800;
            let y_end = y_start;
            swipe(x_start, y_start, x_end, y_end, duration);

        }
        //  __by_touch_file ();
        __by_builtinApi_create_file("/storage/emulated/0/脚本/autoTask_gesture_delete_currentApp");




    }

    let __classfunctionmap2 = {};
    __classfunctionmap2[__globalIhrglobal.myPhone.default] = function () {
        // let x_start = device.width * 0.877193;
        // let y_start = device.height * 0.891167;
        // click(x_start, y_start);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.vivoS10] = function () {
        x_start = 871;
        y_start = 617;
        // y_start = 1800;
        x_end = x_start;
        // y_end = 1800;
        y_end = y_start - 400;
        swipe(x_start, y_start, x_end, y_end, 100);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.xiaomi] = function () {
        x_start = 268;
        y_start = 1633;
        x_end = x_start - 250;
        y_end = y_start;
        swipe(x_start, y_start, x_end, y_end, 1000);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.xiaomi10] = function () {
        x_start = 268;
        y_start = 1633;
        x_end = x_start - 250;
        y_end = y_start;
        swipe(x_start, y_start, x_end, y_end, 1000);
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.leidian] = function () {
    }
    __classfunctionmap2[__globalIhrglobal.myPhone.sp1228] = function () {
        x_start = 871
        y_start = 617;
        // y_start = 1800;
        x_end = x_start;
        // y_end = 1800;
        y_end = y_start - 400;
        swipe(x_start, y_start, x_end, y_end, 200);
    }

    if (__classfunctionmap2[__globalIhrglobal.miykstring.currentDevices__emunMyPhoneList]) {
        __classfunctionmap2[__globalIhrglobal.miykstring.currentDevices__emunMyPhoneList]();
    } else if (__classfunctionmap2[__globalIhrglobal.myPhone.default]) {
        __classfunctionmap2[__globalIhrglobal.myPhone.default]();
    }
    else {
        console.log("function not found");
    }

}





function gesture__projectKyub__click_check_in_posision() {
    gesture__universal_click_xCenter_manyTime_10even_y();


}
const __projectGesture__next_video = (function () {
    const functions = [gesture__universal_swipe_up_in_xCenter0, gesture__universal_swipe_up_in_xCenter2];
    let currentIndex = 0;
    return function () {
        functions[currentIndex]();
        currentIndex = (currentIndex + 1) % functions.length;
    };
})();


//---file: my_ihr_lib.js

// default  is sleep 2 seconds
// NOTE lower version js engine can not support the default parament syntax
function sleep_certian_time(time_long) {
    let true_time_long = time_long || __globalIhrglobal.miykstring.sleep_time_default_this_devices;
    sleep(true_time_long);
}


//BZ
function stay_home_page_with_unlock() {
    for (let index = 0; index < 2; index++) {
        home();
        sleep_certian_time();
    }
}

function logCurrentDetails() {
    const error = new Error();
    const stackLines = error.stack.split('\n');
    const callerLine = stackLines[2]; // 通常第三行是调用者行

    const functionNameMatch = callerLine.match(/at (\S+)/);
    const functionName = functionNameMatch ? functionNameMatch[1] : 'anonymous';

    const fileNameMatch = callerLine.match(/\((.*):(\d+):(\d+)\)/);
    const fileName = fileNameMatch ? fileNameMatch[1] : 'unknown';
    const lineNumber = fileNameMatch ? fileNameMatch[2] : 'unknown';
    const columnNumber = fileNameMatch ? fileNameMatch[3] : 'unknown';

    const output = `File: ${fileName}, Function: ${functionName}, Line: ${lineNumber}, Column: ${columnNumber}`;

    console.log(output);
    return output;
}


function launch_app_start_on_the_home(packageName, __enumLaunchWay) {
    if (__enumLaunchWay == "gesture") {
    } else if (__enumLaunchWay == "builtinApi") {
    }

    function __by_builtinApi(packageName) {
        launch(packageName);
    }
    function __by_gesture(packageName) {
    }

    stay_home_page_with_unlock();
    sleep_certian_time();
    launch(packageName);
}


function page_recent_app(params) {
    recents();
}



function back_many_times() {

    for (let index = 0; index < 3; index++) {
        back();
        sleep_certian_time();
    }
}




function toast_shell(command, is_root, is_show_console_on_devices) {
    let is_root = is_root || false;
    let is_show_console_on_devices = is_show_console_on_devices || false;
    let result = shell(command, is_root);
    autojs_builtin_log(result);
    if (is_show_console_on_devices) {
        console.show();
    }
    if (result.code == 0) {
        toast("执行成功");
    } else {
        toast("执行失败！请到控制台查看错误信息");
    }

    return result;
}

function launch_new_quarck_browser() {
}




function autojs_builtinapi_shell(command, is_root) {
    is_root = is_root || false;
    return shell(command.is_root);
}
// BUG  for a command ,need to know its privilege ,and this function can not throw a un_privilege error
function run_shell(__enumPrivilege, command) {
    var result;
    if (__enumPrivilege == "root") {
        result = autojs_builtinapi_shell(command, true);
    } else if (__enumPrivilege == "adb") {
        result = autojs_builtinapi_shell("adb shell" + command, false);
    } else if (__enumPrivilege == "normal") {
        result = autojs_builtinapi_shell(command, false);
    }

    return result;

}

function sleep_devices_dependient_base_on_default_time(time) {

}

function randomSleep(__classMilliseconds_start_random, __classMilliseconds_end_random) {

    function __version1() {
        const randomTime = Math.floor(Math.random() * __classMilliseconds_end_random) + __classMilliseconds_start_random;
        sleep(randomTime);
    }
    function __version2() {
        const start = new Date().getTime();
        while (new Date().getTime() - start < milliseconds) {
            // 忙等待
        }
    }

    __version1();

}





// the difference between the adb shell and root shell is that adbShellCommad is the concat of string"adb shell" and RootShellCommand   
function project_kyub() {
    function enter_kyub_main_page() {
        launch_new_app("com.kuaishou.nebula");
    }

    function enter_kyub_vrqm_page() {
        enter_kyub_main_page();
        sleep_certian_time(1000 * 10);
        gesture__click_the_quvrqm_posision();
        infomation_dev_by_toast_on_autojs("enter a vrqm page");

        //this gesture function has a template
    }
    function main() {
        check_in();
        for (let index = 0; index < 20 * 2; index++) {
            sleep_certian_time();
            Collect_the_treasure_chest();
            sleep_certian_time();
            loop_video_10_minute();
        }
    }
    function Collect_the_treasure_chest() {
        enter_kyub_vrqm_page();
        infomation_dev_by_toast_on_autojs("sleep begin");
        sleep_certian_time(1000 * 20);
        infomation_dev_by_toast_on_autojs("click the treasure chest  position begin");
        gesture__click_treasure_position();
        infomation_dev_by_toast_on_autojs("click the treasure chest  position  end");

    }
    function check_in() {
        for (let index = 0; index < 2; index++) {
            enter_kyub_vrqm_page();
            sleep_certian_time(1000 * 10);
            gesture__projectKyub__click_check_in_posision();

        }

    }

    function loop_video_10_minute(minute) {
        minute = minute || 10;
        enter_kyub_main_page();
        sleep_certian_time(1000 * 6);
        minute = 10;
        let currentTime = Date.now();
        while (Date.now() - currentTime < 1000 * 60 * minute) {
            __projectGesture__next_video();
            randomSleep(1000 * 2, 1000 * 12);

        }
    }
    main();
}
function kill_cuurent_app_by_shell() {

    let command = `
#!/bin/bash
# 获取当前前台应用的包名
CURRENT_APP_PACKAGE=$(dumpsys window windows | grep -E 'mCurrentFocus' | awk '{print $4}' | cut -d '/' -f 1)

# 检查是否成功获取包名
if [ -z "$CURRENT_APP_PACKAGE" ]; then
  echo "无法获取当前应用的包名"
  exit 1
fi

echo "当前应用包名: $CURRENT_APP_PACKAGE"

# 使用root权限关闭当前应用
su -c "am force-stop $CURRENT_APP_PACKAGE"

echo "已关闭应用: $CURRENT_APP_PACKAGE"
        
        
        `;


}

function kill_current_app(__emunKillWay) {

    function kill_cuurent_app_by_shell() {

        let command = `
#!/bin/bash
# 获取当前应用的包名
CURRENT_APP_PACKAGE=$(adb shell dumpsys window windows | grep -E 'mCurrentFocus' | awk '{print $4}' | cut -d '/' -f 1)
# 检查是否成功获取包名
if [ -z "$CURRENT_APP_PACKAGE" ]; then
  echo "无法获取当前应用的包名"
  exit 1
fi
echo "当前应用包名: $CURRENT_APP_PACKAGE"
# 关闭当前应用
adb shell am force-stop "$CURRENT_APP_PACKAGE"
echo "已关闭应用: $CURRENT_APP_PACKAGE"
        `;
        toast_shell(command);
    }

    __emunKillWay = __emunKillWay || __globalIhrglobal.miykstring.__emunKillWay;

    infomation_dev_by_toast_on_autojs("kill_current_app");
    if (__emunKillWay == "gesture") {
        page_recent_app();
        sleep_certian_time(1000 * 5);
        gesture_kill_current_app_on_the_recents_page();
    } else if (__emunKillWay == "manyBacks") {
        back_many_times();
    }
    else if (__emunKillWay == "adb") {
        kill_cuurent_app_by_shell();
    } else if (__emunKillWay == "builtinApi") {
    }


}



// the function shoulder  be required from local compouter

function test_how_long_the_autojs_app_can_stay() {
    let time_long = 0;
    let file_path = "/sdcard/used_by_autojs/used_by_TestHowLongTheAutojsAppCanStay.txt";

    while (true) {
        let format_string = "the program ^^ run" + time_long + "minute";
        toast(format_string);
        ensure_file_content(file_path, time_long);

    }
}


function ensure_file_content(file_path, text, encoding) {

    encoding = encoding || "utf8";
    files.ensureDir(file_path);
    return files.write(file_path, text, encoding)
}




function infomation_dev_by_toast_on_autojs(info, islog) {
    info = info || "dddddddddddddd";
    toast(info)
}

function launch_new_app(PackageName, __enumLaunchWay, __enumKillWay) {
    __enumLaunchWay = __enumLaunchWay || __globalIhrglobal.miykstring.__emunLanchWay;
    __enumKillWay = __enumKillWay || __globalIhrglobal.miykstring.__emunKillWay;

    launch_app_start_on_the_home(PackageName);
    sleep_certian_time();
    infomation_dev_by_toast_on_autojs("back button");
    back()
    sleep_certian_time();
    kill_current_app(__enumKillWay);
    sleep_certian_time();
    launch_app_start_on_the_home(PackageName);
    // if (__enumLaunchWay == "new") {
    //     launch_app_start_on_the_home(PackageName);
    //     sleep_certian_time();
    //     infomation_dev_by_toast_on_autojs("back button");
    //     back()
    //     sleep_certian_time();
    //     kill_current_app(__enumKillWay);
    //     sleep_certian_time();
    //     launch_app_start_on_the_home(PackageName);
    // }
}


function main(params) {
    auto();
    let some_prompt_text = "hello world";
    toast(some_prompt_text);
    launch_new_app("io.github.huskydg.magisk")
    //  gesture_kill_current_app_on_the_recents_page_on_leidian_player();
    let file_path = "/sdcard/used_by_autojs/used_by_TestHowLongTheAutojsAppCanStay.txt";

}


function get_environment_info() {
    function get_screen_info() {

    }

}


// need accessibility service ,
function todo() {

    function __by_processExit() {
        console.log("todo");
        process.exit(1); // This will stop the program immediately
    }

    function __by_throw() {
        console.log("todo");
        throw new Error("todo");
    }

    __by_processExit();


}


function __projectQuarck() {
    function enter_quarck_main_page() {
        launch_new_app("com.quark.browser");
    }

}


//---file:test
function test() {

    // auto();
    let some_text = "hello world";
    toast(some_text);
    project_kyub();

}


function afterFunction(afterFunction, __classFunctionDirectly) {
    __classFunctionDirectly();
    afterFunction();
}

function wrappFunction(wrapeFunction, __classFunctionDirectly) {
    wrapeFunction();
    __classFunctionDirectly();
    wrapeFunction();
}

// gesture__universal_swipe_up_in_xCenter();
// kill_current_app();
test();
// kill_current_app();
// gesture_kill_current_app_on_the_recents_page();
// device.getAndroidId();
//  gesture__click_treasure_position();
// gesture_kill_current_app_on_the_recents_page();
// gesture__universal_click_xCenter_manyTime_10even_y() 
function executeAfterRandomDelay(callback) {
    // 生成 0 到 8 小时之间的随机时间间隔（以毫秒为单位）
    const minMilliseconds = 0;
    const maxMilliseconds = 8 * 60 * 60 * 1000; // 8 小时
    const randomDelay = Math.floor(Math.random() * (maxMilliseconds - minMilliseconds + 1)) + minMilliseconds;

    // 使用 setTimeout 在随机时间间隔后执行回调函数
    setTimeout(callback, randomDelay);
}


executeAfterRandomDelay(test);
