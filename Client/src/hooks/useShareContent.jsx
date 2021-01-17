import React, { useState, useEffect } from "react";

export default async function (title, url, text) {
  const shareContent = async (title, url, text) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url,
          text,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  await shareContent(title, url, text);

  return { shareContent };
}
