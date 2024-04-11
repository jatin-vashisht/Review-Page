"use client";

import Container from "@/components/Container";
import Modal from "@/components/Modal";
import { traits } from "@/data";
import React, { useState } from "react";
import { FaStar, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState(true);
  const [praise, setPraise] = useState([]);
  const [experience, setExperience] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleStarRating = (rating) => {
      setSafetyRating(rating);
  };

  const handleCommunicationRating = (rating) => {
      setCommunicationRating(rating);
  };

  const handleRecommend = (value) => {
    setRecommend(value);
  };

  const handlePraiseSelection = (trait) => {
    const selected = praise.includes(trait);
    setPraise(
      selected ? praise.filter((t) => t !== trait) : [...praise, trait]
    );
  };

  const handleSubmit = () => {
    console.log("Submitted review");
    setShowModal(true);
    setSafetyRating(0);
    setCommunicationRating(0);
    setRecommend(null);
    setPraise([]);
    setExperience("");
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col h-screen max-w-[450px] mx-auto bg-white">
      <div className="flex flex-col justify-between items-start py-4 px-4">
        <button type="button" className="py-2">
          <svg
            className="h-6 w-6 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-3xl font-black text-gray-800 pb-4">
          Leave a review
        </h1>
      </div>

      <div className="flex flex-col space-y-4 p-4 overflow-y-auto">
        <Container
          mainHeading="Safety"
          subHeading="How safe did you feel with Trausti?"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleStarRating(star)}
                className="h-12 w-12 cursor-pointer"
              >
                <FaStar
                  className={`${
                    star <= safetyRating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              </svg>
            ))}
          </div>
        </Container>

        <Container
          mainHeading="Communication"
          subHeading="How easy was to communicate with Trausti?"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleCommunicationRating(star)}
                className="h-12 w-12 cursor-pointer"
              >
                <FaStar
                  className={`${
                    star <= communicationRating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              </svg>
            ))}
          </div>
        </Container>

        <Container
          mainHeading="Would you recommend Trausti?"
          subHeading="Your opinion won't be posted publicly."
        >
          <div className="flex space-x-4">
            <button
              type="button"
              className={`flex items-center justify-center rounded-full px-4 py-2 text-gray-700 ${
                !recommend && "text-red-500"
              }`}
              onClick={() => handleRecommend(false)}
            >
              <svg
                className="h-12 w-12 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <FaThumbsDown className={`${!recommend && "text-red-500"}`} />
              </svg>
              <span className="ml-2">No</span>
            </button>
            <button
              type="button"
              className={`flex items-center justify-center rounded-full px-4 py-2 text-gray-700 ${
                recommend && "text-green-500"
              }`}
              onClick={() => handleRecommend(true)}
            >
              <svg
                className="h-12 w-12 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <FaThumbsUp className={`${recommend && "text-green-500"}`} />
              </svg>
              <span className="ml-2">Yes</span>
            </button>
          </div>
        </Container>

        <Container
          mainHeading="Praise"
          subHeading="What traits best describe Trausti?"
        >
          <div className="flex flex-wrap gap-2">
            {traits.map((trait) => (
              <button
                key={trait}
                type="button"
                className={`rounded-full px-3 py-2 text-center text-sm font-medium text-gray-700 bg-gray-200 ${
                  praise.includes(trait) ? "bg-green-300 text-green-700" : ""
                }`}
                onClick={() => handlePraiseSelection(trait)}
              >
                {trait}
              </button>
            ))}
          </div>
        </Container>

        <Container
          mainHeading="Care to share more?"
          subHeading="How was your overall experience? What's that one thing you won't forget Trausti for?"
        >
          <textarea
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700"
            placeholder="Come on, you know the drill."
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            rows={5}
          />
        </Container>

        <button
          type="button"
          className="w-full rounded-md font-bold bg-green-300 px-4 py-2 text-center text-green-800"
          onClick={handleSubmit}
        >
          Publish Review
        </button>
      </div>

      {showModal && (
        <Modal handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default ReviewForm;
