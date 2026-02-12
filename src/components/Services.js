import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">HİZMETLERİMİZ</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card
                        title="Yem Satışı"
                        img="yem.png"
                        text="Hizmetlerim metni gelicek"
                        />


                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="x Bayiliği" img="yem.png" text="x markasının yetkili bayisi olarak, ...." />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
