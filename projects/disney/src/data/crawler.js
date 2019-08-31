function getShows() {
  var lis = document.querySelectorAll(".linkList5.targetList li");
  var results = [];
  for (var i = 0; i < lis.length; i++) {
    var areaName = lis[i].querySelector(".areaName").innerText;
    var name = lis[i].querySelector(".headingAreaInner .heading3").innerText;
    var src = lis[i].querySelector("img").src;
    var alt = lis[i].querySelector("img").alt;
    var textArea = lis[i].querySelector(".listTextArea");
    var res = {
      area: areaName,
      name: name.replace("NEW", ""),
      src: src,
      alt: alt
    };
    var nameDesc = lis[i].querySelector(".headingAreaInner .text0");
    if (nameDesc && nameDesc.innerText) {
      res.nameDesc = nameDesc.innerText;
    }
    if (name.indexOf("NEW") > 0) {
      res.new = true;
    }
    var desc = textArea.querySelector(".text0");
    if (desc && desc.innerText) {
      res.desc = desc.innerText;
    }
    var iconTag = textArea.querySelector(".iconTag");
    if (iconTag && iconTag.innerText) {
      res.iconTag = iconTag.innerText;
    }
    var definitionList = textArea.querySelectorAll(".definitionList div");
    var definitions = [];
    for (var j = 0; j < definitionList.length; j += 2) {
      if (definitionList[j]) {
        var def = {
          name: definitionList[j].innerText,
          value: definitionList[j + 1].innerText
        };
        if (def.value) {
          definitions.push(def);
        }
      }
    }
    res.definitions = definitions;
    results.push(res);
  }
  return JSON.stringify(results);
}

getShows();
