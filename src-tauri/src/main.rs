#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use tauri::Manager;
use users::{get_current_uid, get_user_by_uid};

#[tauri::command]
fn get_user() -> String {
  let user = get_user_by_uid(get_current_uid()).unwrap();

  return user.name().to_os_string().into_string().unwrap();
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splashscreen_window = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();
      // we perform the initialization code on a new task so the app doesn't freeze
      tauri::async_runtime::spawn(async move {
        // initialize your app here instead of sleeping :)
        println!("Initializing App...");
        std::thread::sleep(std::time::Duration::from_secs(2));
        println!("App initialized.");

        // After it's done, close the splashscreen and display the main window
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
      });
      Ok(())
    })
    // This is where you pass in your commands
    .invoke_handler(tauri::generate_handler![get_user])
    .run(tauri::generate_context!())
    .expect("failed to run app");
}
