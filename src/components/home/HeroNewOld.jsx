import React from "react";

const HeroSection = () => {
  return (
    <>
      <section
        style={{
          position: "relative",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/banner_desk_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(13,59,102,0.95) 0%, rgba(11,95,76,0.85) 100%)",
          }}
        ></div>

        {/* Content Container */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <div style={{ color: "white" }}>
            <p
              style={{
                color: "#22c55e",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              We make sure you get found.
            </p>

            <h1
              style={{
                fontSize: "48px",
                fontWeight: 800,
                marginTop: "20px",
                lineHeight: "1.2",
              }}
            >
              Drive Traffic, Leads & Revenue with Expert Digital Marketing
              Services
            </h1>

            <p
              style={{
                marginTop: "25px",
                fontSize: "18px",
                maxWidth: "550px",
                color: "#e0e0e0",
              }}
            >
              To succeed in business, you first need to succeed in search
              results. Our digital marketing services connect you with your
              customers’ journey from end to end - from discovery to retention.
            </p>

            <div style={{ marginTop: "35px", display: "flex", gap: "20px" }}>
              <button
                style={{
                  backgroundColor: "#ff7a00",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "40px",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                Speak to an SEO Expert →
              </button>

              <button
                style={{
                  border: "2px solid white",
                  color: "white",
                  padding: "14px 28px",
                  borderRadius: "40px",
                  fontWeight: 600,
                  fontSize: "15px",
                  background: "transparent",
                }}
              >
                Our Services →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div style={{ textAlign: "right" }}>
            <img
              src="https://www.techmagnate.com/wp-content/uploads/2025/10/Home.webp"
              alt="Hero"
              style={{
                maxWidth: "520px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </section>

      {/* BOTTOM LINK BAR */}
      <div
        style={{
          marginTop: "30px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "#e6eef7",
            borderRadius: "50px",
            padding: "20px 40px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              fontWeight: 500,
            }}
          >
            <span>SEO Services</span>
            <span>Digital Marketing Services</span>
            <span>Mobile App Marketing Services</span>
            <span>Content Writing Services</span>
            <span>PPC Services</span>
            <span>Martech Consulting</span>
          </div>



          
        </div>
      </div>
    </>
  );
};

export default HeroSection;