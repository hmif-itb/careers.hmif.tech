export const encodeBase64 = async inputFile => {
  if (inputFile === null) {
    return null
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => {
      resolve(e.target.result)
    }
    reader.onerror = err => {
      reject(err)
    }
    reader.readAsDataURL(inputFile)
  })
}

export const getCareerPathSlug = slug =>
  "/" + slug.split("/")[slug.split("/").length - 1]

export const computeEdges = (edges, slug) => {
  return edges
    .filter(edge => edge?.node?.frontmatter?.slug?.includes(slug))
    .sort((edge1, edge2) =>
      edge1?.node?.frontmatter?.title > edge2?.node?.frontmatter?.title ? 1 : -1
    )
}

export const getTitle = slug => {
  const temp = slug
    ?.slice(1)
    ?.split("-")
    ?.map(t => t[0]?.toUpperCase() + t?.substring(1))
    ?.join(" ")
  return temp
}
