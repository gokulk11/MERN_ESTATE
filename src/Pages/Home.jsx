import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=6`);
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=6`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=6`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}
      <div className=" flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto">
        <h1 className=" font-bold text-slate-700 text-3xl lg:text-6xl">
          Find Your Next <span className=" text-slate-500 ">Perfect</span>
          <br /> Place with ease
        </h1>
        <div className=" text-gray-400 text-xs sm:text-sm">
          Real Estate is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={"/search"}
          className=" text-xs sm:text-sm text-blue-800 font-bold hover:underline">
          Let's Get Started
        </Link>
      </div>

      {/* Swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((offerList) => (
            <SwiperSlide key={offerList._id}>
              <div
                style={{
                  background: `url(${offerList.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listings */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className=" text-2xl font-semibold text-slate-600">
                Recent Offers
              </h2>
              <Link className=" text-sm text-blue-800 hover:underline" to={"/search?offer=true"}>Show more</Link>
            </div>
            <div className=" flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className=" capitalize text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link className=" text-sm text-blue-800 hover:underline" to={"/search?type=rent"}>Show more</Link>
            </div>
            <div className=" flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className=" capitalize text-2xl font-semibold text-slate-600">
                Recent Places for Sale
              </h2>
              <Link className=" text-sm text-blue-800 hover:underline" to={"/search?type=sale"}>Show more</Link>
            </div>
            <div className=" flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
