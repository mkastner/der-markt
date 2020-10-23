use std::{env, fs};
use futures::executor::block_on;
use std::path::Path;
use std::fs::File;
use std::io::Write;
use serde::Deserialize;


#[derive(Deserialize)] struct Item { 
    url: String, 
    file: String 
}

#[derive(Deserialize)] struct DataSourceDef { 
    description: String, 
    items: Vec<Item> 
}

async fn fetch(item: &Item)  -> Result<serde_json::Value, Box<dyn std::error::Error>> {
    println!("item.url {:?}", item.url);
    let res = reqwest::get(&item.url)
        .await?
        .json::<serde_json::Value>()
        .await?;
    Ok(res)
}

#[tokio::main]
async fn read_data_sources() -> std::io::Result<()> {
    let current_dir = env::current_dir()?; 
    println!("***** Current dir {:?}", current_dir);

    for entry in fs::read_dir("../datasources")? {
        let dir = entry?; 
        let data = fs::read_to_string(dir.path())?;
        let def: DataSourceDef = serde_json::from_str(&data)?;
        let items = def.items; 
        for item in &items {
          let res = fetch(item).await;
          let data = res.unwrap(); 
          let json_str = serde_json::to_string(&data)?; 
          println!("res {:?}", json_str); 
          let path = Path::new(&item.file);
          let mut file = File::create(&path)?; 
          file.write_all(json_str.as_bytes()).expect("could not write file");
        }
    }
    Ok(())
}


async fn main_async() {
  let result = read_data_sources();
  
}

fn main() {
  block_on(main_async());
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
       assert_eq!(2+2, 4);
    }
}
