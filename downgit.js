/***************************************************************************
* MIT License

* Copyright (c) 2016 Minhas Kamal

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
***************************************************************************/
/***********************************************************
 * Description: Extensionize the DownGit project for google chrome.
 *              To download single directory on GitHub by just clicking the directory icon.
 * Developer: yuanwind726 (yuanwind726@hotmail.com)
 * Date: 2017-2-9
***********************************************************/

function loading() {
}

loading.prototype.isLoading = !1;
loading.prototype.el = (loading.prototype.el || (function () {
  var img = document.createElement('IMG');
  img.width = img.height = 64;
  img.style = 'position: absolute;top: 50%;left: 50%;-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);';
  img.src = 'data:image/gif;base64,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';

  // 
  var msg = document.createElement('span');
  msg.style = 'left:10%; top: 15%; position: absolute;';
  loading.prototype.msg = function (text) {
    msg.textContent = text;
  };
  loading.prototype.clearMsg = function () {
    msg.textContent = '';
  };

  //
  var inner = document.createElement('div');
  inner.style = 'color: #fff;height: 100%;background: #000;text-align: center;line-height: 200px;font-size: 1.5em;';
  inner.appendChild(msg);
  inner.appendChild(img);

  //
  var outer = document.createElement('div');
  outer.style = 'background: #000;position: absolute;top: 0px;left: 0px;right: 0px;bottom: 0px;z-index: 99999 !important;opacity: 0;overflow: hidden;display: block;visibility: visible;opacity: 0.55;transition-delay: 10s;transition: opacity 0.5s linear;';
  outer.appendChild(inner);
  return outer;
})());

var loadingEl = new loading;
function toggleLoading() {
  !loadingEl.isLoading && (document.body.appendChild(loadingEl.el));
  loadingEl.isLoading && (loadingEl.el.remove());
  loadingEl.isLoading = !loadingEl.isLoading;
  window.onscroll();
}

window.onscroll = function () {
  if (loadingEl.isLoading) {
    loadingEl.el.style.top = document.body.scrollTop + 'px';
    loadingEl.el.style.bottom = -1 * document.body.scrollTop + 'px';
  }
}

//---DownGit start---
var urlPrefix = "";
var urlPostfix = "";

var resolveUrl = function (url) {
  var repoPath = new URL(url).pathname;
  var splitPath = repoPath.split("/", 5);

  var resolvedUrl = {};
  resolvedUrl.author = splitPath[1];
  resolvedUrl.repository = splitPath[2];
  resolvedUrl.branch = splitPath[4];
  resolvedUrl.directoryPath = repoPath.split(resolvedUrl.branch + "/", 2)[1];

  return resolvedUrl;
}

var downloadDir = function (resolvedUrl, progress) {
  progress.isProcessing.val = true;
  urlPrefix = "https://api.github.com/repos/" + resolvedUrl.author +
    "/" + resolvedUrl.repository + "/contents/";
  urlPostfix = "?ref=" + resolvedUrl.branch;

  var dirPaths = [];
  var files = [];
  var requestedPromises = [];

  dirPaths.push(resolvedUrl.directoryPath);
  toggleLoading();
  loadingEl.msg('Start downloading directory '.concat(resolvedUrl.directoryPath));
  mapFileAndDirectory(dirPaths, files, requestedPromises, progress, resolvedUrl);
}

function httpget(url) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    var appendedAccessToken = 'access_token=8ca33229992392b5bafeed43dc837ed9ada45f0c';
    req.open('GET', trimedQueryStringUrl(url).concat(appendedAccessToken));

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

var mapFileAndDirectory = function (dirPaths, files, requestedPromises, progress, resolvedUrl) {
  httpget(urlPrefix + dirPaths.pop() + urlPostfix).then(function (rawResponse) {
    var response = { data: '' };
    try {
      response.data = JSON.parse(rawResponse);
    } catch (error) {
      console.warn('fails to parse response as JSON');
      return;
    }
    for (var i = response.data.length - 1; i >= 0; i--) {
      if (response.data[i].type == "dir") {
        dirPaths.push(response.data[i].path);
      } else {
        getFile(response.data[i].path, response.data[i].download_url,
          files, requestedPromises, progress);
      }
    }

    if (dirPaths.length <= 0) {
      downloadFiles(files, requestedPromises, progress, resolvedUrl);
    } else {
      mapFileAndDirectory(dirPaths, files, requestedPromises, progress, resolvedUrl);
    }
  });
}

var downloadFiles = function (files, requestedPromises, progress, resolvedUrl) {
  var dirSplits = resolvedUrl.directoryPath.split("/");
  var downloadFileName = decodeURI(dirSplits[dirSplits.length - 1]);

  var zip = new JSZip();
  Promise.all(requestedPromises).then(function (data) {
    for (var i = files.length - 1; i >= 0; i--) {
      zip.file(downloadFileName + "/" + files[i].path.split(downloadFileName + "/")[1],
        files[i].data);
    }

    progress.isProcessing.val = false;
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, downloadFileName + ".zip");
      toggleLoading();
    });
  });
}

var getFile = function (path, url, files, requestedPromises, progress) {
  var promise = httpget(trimedQueryStringUrl(url).concat('responseType=arraybuffer')).then(function (file) {
    files.push({ path: path, data: file });
    progress.downloadedFiles.val = files.length;
    loadingEl.msg(path.concat(' is Done'));
  }, function (error) {
    console.log(error);
  });
  requestedPromises.push(promise);
  progress.totalFiles.val = requestedPromises.length;
}

var downloadZippedFiles = function (url, progress) {
  loadingEl.clearMsg();
  var resolvedUrl = resolveUrl(url);

  if (!resolvedUrl.directoryPath || resolvedUrl.directoryPath == "") {
    if (!resolvedUrl.branch || resolvedUrl.branch == "") {
      resolvedUrl.branch = "master";
    }

    var downloadUrl = "https://github.com/" + resolvedUrl.author + "/" +
      resolvedUrl.repository + "/archive/" + resolvedUrl.branch + ".zip";

    window.location = downloadUrl;
  } else {
    downloadDir(resolvedUrl, progress);
  }
}
//

function trimedQueryStringUrl(url) {
  return url.concat(url.lastIndexOf('?') == -1 ? '?' : '&');
}

var firstDirNode = document.querySelector('.icon .octicon-file-directory');
firstDirNode && (function () {
  var parentTableNode = firstDirNode.parentNode;
  var depth = 10;
  while (depth > 0) {
    if (parentTableNode.tagName === "TABLE") {
      //console.dir(parentTableNode);
      //console.info(parentTableNode);
      break;
    }
    depth--;
    parentTableNode = parentTableNode.parentNode;
  }

  function isDirectoryNode(n) {
    return n.classList.contains('octicon-file-directory');
  }

  function addDownloadTooltip() {
    Array.prototype.slice.call(document.querySelectorAll('.octicon-file-directory')).map(function (icon) {
      var td = icon.parentNode;
      td.classList.add('tooltipped', 'tooltipped-se');
      td.setAttribute('aria-label', 'Click to download');
    });
  }

  // continue only get the table node
  if (depth) {
    addDownloadTooltip();

    parentTableNode.addEventListener("mouseover", function (e) {
      var nodeTarget = e.target;
      if (isDirectoryNode(nodeTarget.parentNode)) {
        nodeTarget.style && (nodeTarget.style.cursor = 'pointer');
      }
    })

    parentTableNode.addEventListener("click", function (e) {
      var nodeTarget = e.target;
      if (isDirectoryNode(nodeTarget.parentNode)) {
        var dirHref = nodeTarget.parentNode.parentNode.nextElementSibling.children[0].children[0].href;
        console.debug(dirHref);
        var progress = {
          isProcessing: { val: false },
          downloadedFiles: { val: 0 },
          totalFiles: { val: 0 }
        };
        downloadZippedFiles(dirHref, progress);
      }
    })
  }
})()
