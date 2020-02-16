const beautyAddress = fullAddress => {
  if (!fullAddress) return null
  const newFullAddress =
    fullAddress.substr(0, 6) +
    '...' +
    fullAddress.substr(fullAddress.length - 6, fullAddress.length)

  return newFullAddress
}

export default beautyAddress
