import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt- flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
            cumque, sunt accusantium, labore ipsum incidunt fugit libero
            similique voluptatum quae dolorem pariatur facere voluptatem ea.
            Facilis, vel sapiente reprehenderit ipsa eligendi qui, soluta error,
            animi dolores vitae modi nostrum dolorem culpa nemo velit. Sequi
            ducimus placeat aperiam consequatur tempora, dolor molestias tenetur
            doloremque aspernatur blanditiis, rem a sapiente quod rerum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            tenetur exercitationem dolore minima illum eum modi, aliquam
            laudantium, aut veritatis pariatur. Dolores, doloribus unde. Quas
            magnam expedita omnis in error labore nemo. Error iusto voluptate
            aliquid, blanditiis obcaecati sed asperiores quis eveniet, rerum
            nihil repudiandae dolores fugiat quod minima amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            molestias mollitia quo accusantium odit voluptatem, eius impedit
            sequi explicabo provident voluptas placeat tenetur quia sit.
            Voluptate provident repudiandae consequuntur ut?
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't Hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+919998887771">
            +91 9998887771
          </a>
        </div>
      </section>
      
    </>
  );
}
