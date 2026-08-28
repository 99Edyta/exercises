// Dette laver en liste med breadcrumbs
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
// Dette er knappen vi lavede i HTML
document.querySelector("button").addEventListener("click", addBreadCrumbToPaige);
// Den finder UL fra HTML og sætter Breadcrumbs ind
function addBreadCrumbToPaige() {
  document.querySelector("ul").replaceChildren(generateBreadCrumpPath());
}
// Dette funktion bygger breadcrumbs i HTML siden
function generateBreadCrumpPath() {
  const breadcrumbPath = document.createDocumentFragment();

  bc.forEach((breadcrumb, index) => {
    const listItem = document.createElement("li");
    const isLastBreadcrumb = index === bc.length - 1;

    if (isLastBreadcrumb) {
      listItem.textContent = breadcrumb.name;
    } else {
      const link = document.createElement("a");
      link.href = breadcrumb.link;
      link.textContent = breadcrumb.name;
      listItem.append(link);
    }

    breadcrumbPath.append(listItem);
  });

  return breadcrumbPath;
}
