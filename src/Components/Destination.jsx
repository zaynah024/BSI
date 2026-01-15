import React from "react";
import one from "../assets/Main/country/1.png";
import to from "../assets/Main/country/2.png";
import three from "../assets/Main/country/3.png";
import fore from "../assets/Main/country/4.png";
import fiv from "../assets/Main/country/5.png";

const Destination = () => {
  return (
    <div className="bg-zinc-50">
      <div className="w-[90%] md:w-[80%] mx-auto py-20 ">
        <p className="text-primary font-medium uppercase">Destinations</p>
        <p className="text-4xl font-bold mt-3 ">
          POPULAR <span className="text-primary">DESTINATIONS</span> FOR <br />{" "}
          INTERNATIONAL STUDENTS
        </p>
        <div className="mt-10">
          <div class="general-container">
            <input
              class="radio"
              type="radio"
              name="card"
              id="cardUnoo"
              checked
            />
            <label class="content" for="cardUnoo">
              <h3 class="card-title subsubtitle">
                <span className="text-2xl shadow-lg bg-white/70 p-4 font-bold rounded-2xl ">
                  UK (UNITED KINGDOM)
                </span>
              </h3>
            </label>
            <input
              class="radio"
              type="radio"
              name="card"
              id="cardUno0"
              checked
            />
            <label class="content" for="cardUno0">
              <h3 class="card-title subsubtitle">
                <span className="text-2xl shadow-lg bg-white/70 p-4 font-bold rounded-2xl ">
                  UK (UNITED KINGDOM)
                </span>
              </h3>
            </label>

            <input class="radio" type="radio" name="card" id="cardDoss" />
            <label class="content" for="cardDoss">
              <h3 class="card-title subsubtitle">
                <span className="text-2xl shadow-lg bg-white/70 p-4 font-bold rounded-2xl ">
                  UK (UNITED KINGDOM)
                </span>
              </h3>
            </label>

            <input class="radio" type="radio" name="card" id="cardTress" />
            <label class="content" for="cardTress">
              <h3 class="card-title subsubtitle">
                <span className="text-2xl shadow-lg bg-white/70 p-4 font-bold rounded-2xl ">
                  UK (UNITED KINGDOM)
                </span>
              </h3>
            </label>

            <input class="radio" type="radio" name="card" id="cardCuatro1" />
            <label class="content" for="cardCuatro1">
              <h3 class="card-title subsubtitle">
                <span className="text-2xl shadow-lg bg-white/70 p-4 font-bold rounded-2xl ">
                  UK (UNITED KINGDOM)
                </span>
              </h3>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
