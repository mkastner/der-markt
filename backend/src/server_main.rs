use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello World!")
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("manual")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().route("/hey", web::get().to(manual_hello)))
        .bind("localhost:3000")?
        .run()
        .await
}
