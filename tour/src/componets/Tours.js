import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function TourDetails({ place }) {
  const detailsAboutPlace = {
    "Petra":
      "Petra is a famous archaeological site in Jordan jnxjkvcnadnvad  cjsbnjvcn  n sjfnvcjdsan  j sjfnjoasdnmf jfnsajo  ",
    "Wadi Rum":
      "Wadi Rum is a protected desert wilderness in southern Jordan. Wadi Rum Desert is famed for its link to T.E. Lawrence the original “Lawrence of Arabia”. Along with Prince Feisal bin Al-Hussein, he made his base here during the Arab Revolt of 1917-1918. At the center of Wadi Rum village is the Desert Police fort. Built in 1932 the village remained nothing more than a cluster of tents until the 1980s.",
    "Jerash":
      "Jerash is a city in northern Jordan, famous for its ancient Roman ruins Jerash was then deserted until it reappeared in the historical record at the beginning of Ottoman rule in the area during the early 16th century. In the census of 1596, it had a population of 12 Muslim households.",
    "Castle Mountain":
      "Castle Mountain is a mountain in Jordan, famous for its castle ruins.The Citadel has a long history of occupation by many great civilizations.[1] Evidence of inhabitance since the Neolithic period has been found and the hill was fortified during the Bronze Age (1800 BCE). The hill became the capital of the Kingdom of Ammon sometime after 1200 BCE",
    "Madaba":
      "The Roman Amphitheatre is located in the eastern part of the Jordanian capital, Amman. It is specifically at the foot of Jabal Al-Joufah, on a hill opposite the Amman Citadel. A Greek inscription on one of the pillars indicates that this amphitheater was built in honour of Emperor Antoninus Pius ",
    "Dead Sea":
      ".Al Hussein Park is a public park in Amman, Jordan that continues to be under construction. ",
  };

  return (
    <div className="container12">
      <h4 className="mt-2 heading">{place.name}</h4>
      <p className="description">{detailsAboutPlace[place.name]}</p>
    </div>
  );
}

function Tours() {
  const places = [
    {
      id: 1,
      name: "Petra",
      info: "some information about petra",
      image:
        "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 10,
    },
    {
      id: 2,
      name: "Wadi rum",
      info: "some information about rum",
      image:
        "https://images.pexels.com/photos/13458330/pexels-photo-13458330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 12,
    },
    {
      id: 3,
      name: "Jerash",
      info: "some information about Jerash",
      image:
        "https://images.pexels.com/photos/4216244/pexels-photo-4216244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 6,
    },
    {
      id: 4,
      name: "Madaba",
      info: "some information about Madaba",
      image:
        "https://media.istockphoto.com/id/146737795/photo/madaba-map.jpg?s=1024x1024&w=is&k=20&c=7hk9LfuYqTYwIUjCCSx8QTO1Ua8yO2tyHz1IHx_jOKE=",
      price: 8,
    },
    {
      id: 5,
      name: "Dead Sea",
      info: "some information about Dead Sea",
      image:
        "https://images.pexels.com/photos/3370311/pexels-photo-3370311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 60,
    },
  ];

  const [tourismPlaces] = useState(places);
  const [selectedPlace, setSelectedPlace] = useState("");

  function handleClick(place) {
    setSelectedPlace(place);
  }

  const filteredPlaces = selectedPlace ? [selectedPlace] : tourismPlaces; //It also displays the info and price properties of the place object only if there is a selectedPlace.

  return (
    <div className="row text-center">
      <div className="card-container d-flex justify-content-center flex-wrap">
        {filteredPlaces.map((place) => (
          <div
            className="card mb-4 mx-2"
            key={place.id}
            onClick={() => handleClick(place)}
          >
            <div className="card-header">{place.name}</div>
            <div className="card-body">
              <img
                src={place.image}
                alt={place.name}
                className="card-img-top"
                style={{ width: "100%", height: "auto" }}
              />
              {selectedPlace && (
                <>
                  <div className="card-text mb-3">
                    {place.info} and we get {place.price} JOD per a trip{" "}
                  </div>
                  <div className="card-text"></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {selectedPlace && <TourDetails place={selectedPlace} />}
      </div>
    </div>
  );
}

export default Tours;
