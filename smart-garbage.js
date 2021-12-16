const smartGarbage = (trash, bins) => {
  if (trash === "recycling") {
    bins["recycling"] = bins["recycling"] + 1 || 1;
  } else if (trash === "waste") {
    bins["waste"] = bins["waste"] + 1 || 1;
  } else if (trash === "compost") {
    bins["compost"] = bins["compost"] + 1 || 1;
  }
  return bins;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
