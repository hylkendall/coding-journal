// 文物来源审核器（fCC JavaScript 模块 5 研讨会，W19D4 2026-11-26）
// 标 📌 的地方是今天写错过的：写了当时的写法、报什么错、为什么。
//
// ── 今天反复出现的规则：点号还是方括号？──────────────────────
//   看方括号里的名字，在函数第一行的括号里（或自己 const 过的）找不找得到：
//     找得到 → 它是变量 → 方括号，不加引号：collection[id]
//     找不到 → 它是属性名 → 点号：artifact.tags、artifact.locations
//   这个文件里，方括号里只放过 id。
//
//   const key = "name";
//   obj.key     → 找名叫 "key" 的属性（点号后面写什么就找什么，不读变量）
//   obj["key"]  → 跟 obj.key 完全一样
//   obj[key]    → 先读变量 key 的值 "name"，找的是 name 属性
//   obj[tags]   → tags 从没声明过 → ReferenceError
// ────────────────────────────────────────────────────────────

// 📌 第 3 步：拼错过三个属性名
//    location → locations，tag → tags，onDispaly → onDisplay
//    后面每个函数都靠这些名字读数据，拼错了就读到 undefined。
//    属性名直接从题目里复制，别自己打。
const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: {
      id: 201,
      name: "Earl Sinclair",
    },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

console.log(collection[101].title);
console.log(collection[101].curator.name);

function getArtifactTitle(id) {
  const artifact = collection[id];
  return artifact ? artifact.title : "Artifact not found";
}

console.log(getArtifactTitle(102));

// 📌 第 9 步错过两处：
//  1. 写过 artifact[tags] → ReferenceError
//     tags 不在第一行括号 (id, tag) 里，是属性名 → 点号 artifact.tags
//  2. 漏写 "artifact &&"：题目说"如果文物存在且……"，只写了后半句。
//     id 不存在时 artifact 是 undefined，再读 undefined.tags → TypeError
//     顺序不能反：&& 左边是 false 就不看右边了，先查 artifact，读 .tags 才安全。
//  补充：tags 是数组，所以这里能用 includes；对象本身没有 includes。
//
// 从这里往下，每个函数都是同一个开头：
//   const artifact = collection[id];
//   if (artifact) { ...再动它的属性... }
function addTag(id, tag) {
  const artifact = collection[id];
  if (artifact && !artifact.tags.includes(tag)) {
    artifact.tags.push(tag);
  }
}

addTag(101, "royal");
console.log(collection[101].tags);

// 📌 第 11 步：写过 collection[id][locations] → ReferenceError
//    跟第 9 步同一个问题：locations 不在 (id, gallery, year) 里 → 点号。
// { gallery, year } 是简写，等于 { gallery: gallery, year: year }
function moveArtifact(id, gallery, year) {
  const artifact = collection[id];
  if (artifact) {
    artifact.locations.push({ gallery, year });
  }
}

moveArtifact(102, "Hall B", 2026);
console.log(collection[102].locations);

function toggleDisplayStatus(id) {
  const artifact = collection[id];
  if (artifact) {
    artifact.onDisplay = !artifact.onDisplay;
  }
}

console.log(collection[102].onDisplay);
toggleDisplayStatus(102);
console.log(collection[102].onDisplay);

function updateCurator(id, name) {
  const artifact = collection[id];
  if (artifact) {
    artifact.curator.name = name;
  }
}

updateCurator(101, "Fran Sinclair");
console.log(collection[101].curator.name);

function buildSummary(id) {
  const artifact = collection[id];
  if (!artifact) {
    return "Artifact not found";
  }
  const currentLocation = artifact.locations[artifact.locations.length - 1];

  // 📌 第 19 步错过三处：
  //  1. 写过 artifact.Curator.name：大小写不同就是另一个名字。
  //     artifact.Curator 是 undefined，再读 .name → TypeError，
  //     函数在这里就停了，什么都没返回，所以测试连第 1 条"包含标题"都没过。
  //  2. 写过 "Category: " ${artifact.category}：反引号里本来就是文字，
  //     只有 ${ } 里面才是代码。加的引号会原样输出成 "Category: " Ceremonial
  //  3. 写过 ${currentLocation}：这是整个对象 { gallery, year }，会显示 [object Object]。
  //     看到 [object Object]，就回去找少写的 .属性名，这里要的是 .gallery
  //  下面几行顶格写是对的：反引号里的空格会原样保留，缩进了每行前面就多出空格。
  //  注释也不能写进反引号里，写进去就成了输出的文字。
  return `${artifact.title}
Category: ${artifact.category}
Curator: ${artifact.curator.name}
Current Gallery: ${currentLocation.gallery}
On Display: ${artifact.onDisplay}`;
}

console.log(buildSummary(101));