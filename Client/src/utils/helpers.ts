// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to $ format
export const convertMoney = (money) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

/*
  const loadMoreItems = () => {
    let endpoint = "";
    setMyState((prevState) => ({ ...prevState, loading: true }));

    if (myState.searchTerm === "") {
      console.log(3);
      setMyState((prevState) => ({ ...prevState, currentPage: prevState.currentPage + 1 }));

      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${myState.currentPage}`;
    } else {
      setMyState((prevState) => ({ ...prevState, currentPage: prevState.currentPage + 1 }));
      console.log(4);
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${myState.searchTerm}&page=${myState.currentPage}`;
    }
    fetchItems(endpoint);
  }; */
