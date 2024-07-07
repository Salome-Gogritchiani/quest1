///salo
// რადგანაც მარტივი გამოყენებული იყო ცოტა გავართულე :-)

let originalArraySalo = [
  {
    id: 1,
    name: "Group_3_Salo",
    details: {
      description: "This is Group_3_Salo",
      tags: ["tag1", "tag2"],
    },
  },
  {
    id: 2,
    name: "Group_3_Iza",
    details: {
      description: "This is Group_3_Iza",
      tags: ["tag3", "tag4"],
    },
  },
  {
    id: 3,
    name: "Group_3_Ruso",
    details: {
      description: "Group_3_Ruso",
      tags: ["tag5", "tag6"],
    },
  },
];

function shallowCopyArray3(arr) {
  return arr.slice();
}

let shallowCopy3 = shallowCopyArray3(originalArraySalo);

function deepCloneArray3(arr) {
  let clone = [];
  for (let obj of arr) {
    let newObj = {
      ...obj,
      details: { ...obj.details, tags: [...obj.details.tags] },
    };
    clone.push(newObj);
  }
  return clone;
}

let deepClone3 = deepCloneArray3(originalArraySalo);
console.log("Original Array:", originalArraySalo);
console.log("Shallow Copy:", shallowCopy3);
console.log("Deep Clone:", deepClone3);

shallowCopy3[0].details.description = "Modified description for shallow copy";
shallowCopy3[0].details.tags.push("tag7");

deepClone3[0].details.description = "Modified description for deep clone";
deepClone3[0].details.tags.push("tag8");

console.log("After modification:");
console.log("Original Array:", originalArraySalo);
console.log("Shallow Copy:", shallowCopy3);
console.log("Deep Clone:", deepClone3);
