// 写 5 个函数，list 是歌单数组，song 是歌名字符串：

// addSong(list, song)
// 歌已经在歌单里：打印 "Rain" is already in the playlist.，返回 false。
// 不在：加到末尾，打印 "Moon" added. Total: 4 songs.（数字是加完以后的歌曲数），返回 true。

// removeSong(list, song)
// 从歌单里删掉这首歌，返回被删掉的歌名（字符串，不是数组）。
// 找不到：返回 null。
// 这个函数里面什么都不打印。

// moveToTop(list, song)
// 把这首歌从原位置拿出来，放到最前面，打印 "Moon" moved to the top.
// 找不到：打印 "Storm" not found.
// 不需要返回值。

// showQueue(list)：返回一个字符串，不打印。
// 正常情况：Next: 第一首 | Later: 剩下的歌，用逗号加空格隔开
// 只有一首歌：Later: 后面写 (none)
// 歌单是空的：返回 Queue is empty.

// previewReversed(list)：返回倒序的歌单，歌名之间用 <- 连起来，不能改动原数组。


function addSong(list, song) {
    if (list.indexOf(song) === -1) {
        const num = list.push(song);
        console.log(`"${song}" added. Total: ${num} songs.`)
        return true;
    } else {
        console.log(`"${song}" is already in the playlist.`);
        return false;
    }
}

function removeSong(list, song) {
    const index = list.indexOf(song);
    if (index !== -1) {
        return list.splice(index, 1)[0];
    } else {
        return null;
    }
}

function moveToTop(list, song) {
    const index = list.indexOf(song);
    if (index !== -1) {
        list.unshift(list.splice(index, 1).join());
        console.log(`"${song}" moved to the top.`)
        // return;
    } else {
        console.log(`"${song}" not found.`)
        // return;
    }
}

function showQueue(list) {
    if (list.length === 0) {
        return "Queue is empty.";
    } else if (list.length === 1) {
        return "Next: " + list[0] + " | Later: (none)";
    } else {
        return "Next: " + list[0] + " | Later: " + list.slice(1).join(", ");
    }
}

function previewReversed(list) {
    const relist = [...list];
    const re = relist.reverse().join(" <- ");
    return re;
}


const playlist = ["Blue Sky", "Rain", "Sunrise"];

console.log(addSong(playlist, "Moon"));
console.log(addSong(playlist, "Rain"));
console.log(removeSong(playlist, "Rain"));
console.log(removeSong(playlist, "Storm"));
moveToTop(playlist, "Moon");
moveToTop(playlist, "Storm");
console.log(showQueue(playlist));
console.log(previewReversed(playlist));
console.log(playlist);
console.log(showQueue(["Solo"]));
console.log(showQueue([]));