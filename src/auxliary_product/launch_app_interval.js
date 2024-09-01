import { autoxjs_api } from "../autoxjs_api/autojs_api";




let app_list = ['com.termux',"org.autojs.autoxjs.v6"]



function launch_app_interval_to_enable_alive() {


    for (let app of app_list) {
        autoxjs_api.app.launch(app);
        sleep(5 * 1000);
    }
}



export { launch_app_interval_to_enable_alive };