const useShareContent = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: "hello",
        url: "chillmovie.netlify.app",
        text: "test",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default useShareContent;
