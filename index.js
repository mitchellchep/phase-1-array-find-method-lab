function superbowlWin(superbowlResults) {
  for (const result of superbowlResults) {
    if (result.result === "W"){
      return result.year;
    }
        }
        return undefined;
  }



