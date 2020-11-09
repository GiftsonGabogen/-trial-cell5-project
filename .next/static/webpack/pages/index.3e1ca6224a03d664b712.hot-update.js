webpackHotUpdate_N_E("pages/index",{

/***/ "./components/tools/sorter.ts":
/*!************************************!*\
  !*** ./components/tools/sorter.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sorter; });\n//arranging data with common value on the given attribute\n//ex: with the same myrate or the same name\n//then group them on a sub array\nfunction arrangeWithCommons(_ref) {\n  var array = _ref.array,\n      method = _ref.method;\n  var sortedMovies = [];\n  var sortHolder = [];\n\n  for (var i = 0; i < array.length; i++) {\n    if (i === 0) {\n      sortHolder.push(array[i]);\n      continue;\n    }\n\n    if (array[i][method] === array[i - 1][method]) {\n      sortHolder.push(array[i]);\n    } else {\n      sortedMovies.push(sortHolder);\n      sortHolder = [array[i]];\n    }\n\n    if (i === array.length - 1) {\n      if (sortHolder.length !== 0) {\n        sortedMovies.push(sortHolder);\n      }\n    }\n  }\n\n  return sortedMovies;\n} //for sorting the myrate attribute\n\n\nvar sortMyrate = function sortMyrate(_ref2) {\n  var movies = _ref2.movies,\n      sortMethod = _ref2.sortMethod;\n  return movies.sort(function (a, b) {\n    if (a.myrate > b.myrate) {\n      return sortMethod.myrate.sort === \"asc\" ? 1 : -1;\n    } else {\n      return sortMethod.myrate.sort === \"asc\" ? -1 : 1;\n    }\n  });\n};\n\nvar sortName = function sortName(_ref3) {\n  var movies = _ref3.movies,\n      sortMethod = _ref3.sortMethod;\n  return movies.sort(function (a, b) {\n    if (a.name.toLowerCase() > b.name.toLowerCase()) {\n      return sortMethod.name.sort === \"asc\" ? 1 : -1;\n    } else {\n      return sortMethod.name.sort === \"asc\" ? -1 : 1;\n    }\n  });\n};\n\nfunction Sorter(_ref4) {\n  var sortMethod = _ref4.sortMethod,\n      movies = _ref4.movies,\n      sortPriority = _ref4.sortPriority;\n\n  if (sortMethod.name.sort === \"\" && sortMethod.myrate.sort == \"\") {\n    return movies;\n  }\n\n  var sortedMovies = [];\n  var moviesCopy = movies.slice();\n\n  if (sortPriority === \"myrate\") {\n    //sort array by myrate\n    var sortedRate = sortMyrate({\n      movies: moviesCopy,\n      sortMethod: sortMethod\n    }); //compress array into sub array if they have the same myrate value\n\n    var arranged = arrangeWithCommons({\n      array: sortedRate,\n      method: \"myrate\"\n    }); //sort the individual sub array according to name\n\n    for (var i = 0; i < arranged.length; i++) {\n      sortName({\n        movies: arranged[i],\n        sortMethod: sortMethod\n      });\n    } //push all of the sorted array and subarray to sortedMovies\n\n\n    arranged.map(function (subArray) {\n      subArray.map(function (arr) {\n        sortedMovies.push(arr);\n      });\n    });\n    return sortedMovies;\n  } else if (sortPriority === \"name\") {\n    //sort array by name\n    var sortedName = sortName({\n      movies: moviesCopy,\n      sortMethod: sortMethod\n    }); //compress array into sub array if they have the same name value\n\n    var _arranged = arrangeWithCommons({\n      array: sortedName,\n      method: \"name\"\n    }); //sort the individual sub array according to name\n\n\n    for (var _i = 0; _i < _arranged.length; _i++) {\n      sortMyrate({\n        movies: _arranged[_i],\n        sortMethod: sortMethod\n      });\n    } //push all of the sorted array and subarray to sortedMovies\n\n\n    _arranged.map(function (subArray) {\n      subArray.map(function (arr) {\n        sortedMovies.push(arr);\n      });\n    });\n\n    return sortedMovies;\n  } else {\n    if (sortMethod.name.sort !== \"\") {\n      return sortName({\n        movies: movies,\n        sortMethod: sortMethod\n      });\n    } else {\n      return sortMyrate({\n        movies: movies,\n        sortMethod: sortMethod\n      });\n    }\n  }\n}\n_c = Sorter;\n\nvar _c;\n\n$RefreshReg$(_c, \"Sorter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9zb3J0ZXIudHM/OTZkNyJdLCJuYW1lcyI6WyJhcnJhbmdlV2l0aENvbW1vbnMiLCJhcnJheSIsIm1ldGhvZCIsInNvcnRlZE1vdmllcyIsInNvcnRIb2xkZXIiLCJpIiwibGVuZ3RoIiwicHVzaCIsInNvcnRNeXJhdGUiLCJtb3ZpZXMiLCJzb3J0TWV0aG9kIiwic29ydCIsImEiLCJiIiwibXlyYXRlIiwic29ydE5hbWUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJTb3J0ZXIiLCJzb3J0UHJpb3JpdHkiLCJtb3ZpZXNDb3B5Iiwic2xpY2UiLCJzb3J0ZWRSYXRlIiwiYXJyYW5nZWQiLCJtYXAiLCJzdWJBcnJheSIsImFyciIsInNvcnRlZE5hbWUiXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxrQkFBVCxPQU1HO0FBQUEsTUFMRkMsS0FLRSxRQUxGQSxLQUtFO0FBQUEsTUFKRkMsTUFJRSxRQUpGQSxNQUlFO0FBQ0YsTUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osS0FBSyxDQUFDSyxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUN0QyxRQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1pELGdCQUFVLENBQUNHLElBQVgsQ0FBZ0JOLEtBQUssQ0FBQ0ksQ0FBRCxDQUFyQjtBQUNBO0FBQ0E7O0FBQ0QsUUFBSUosS0FBSyxDQUFDSSxDQUFELENBQUwsQ0FBU0gsTUFBVCxNQUFxQkQsS0FBSyxDQUFDSSxDQUFDLEdBQUcsQ0FBTCxDQUFMLENBQWFILE1BQWIsQ0FBekIsRUFBK0M7QUFDOUNFLGdCQUFVLENBQUNHLElBQVgsQ0FBZ0JOLEtBQUssQ0FBQ0ksQ0FBRCxDQUFyQjtBQUNBLEtBRkQsTUFFTztBQUNORixr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Qk0sTUFtQkE7QUFDTixRQUFJTyxVQUFVLENBQUNNLElBQVgsQ0FBZ0JMLElBQWhCLEtBQXlCLEVBQTdCLEVBQWlDO0FBQ2hDLGFBQU9JLFFBQVEsQ0FBQztBQUFFTixjQUFNLEVBQU5BLE1BQUY7QUFBVUMsa0JBQVUsRUFBVkE7QUFBVixPQUFELENBQWY7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPRixVQUFVLENBQUM7QUFBRUMsY0FBTSxFQUFOQSxNQUFGO0FBQVVDLGtCQUFVLEVBQVZBO0FBQVYsT0FBRCxDQUFqQjtBQUNBO0FBQ0Q7QUFDRDtLQTVEdUJRLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL3Rvb2xzL3NvcnRlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNb3ZpZSwgSVNvcnRNZXRob2QgfSBmcm9tIFwiLi4vLi4vcGFnZXMvaW5kZXhcIjtcblxuLy9hcnJhbmdpbmcgZGF0YSB3aXRoIGNvbW1vbiB2YWx1ZSBvbiB0aGUgZ2l2ZW4gYXR0cmlidXRlXG4vL2V4OiB3aXRoIHRoZSBzYW1lIG15cmF0ZSBvciB0aGUgc2FtZSBuYW1lXG4vL3RoZW4gZ3JvdXAgdGhlbSBvbiBhIHN1YiBhcnJheVxuZnVuY3Rpb24gYXJyYW5nZVdpdGhDb21tb25zKHtcblx0YXJyYXksXG5cdG1ldGhvZFxufToge1xuXHRhcnJheTogSU1vdmllW107XG5cdG1ldGhvZDogc3RyaW5nO1xufSkge1xuXHRjb25zdCBzb3J0ZWRNb3ZpZXMgPSBbXTtcblx0bGV0IHNvcnRIb2xkZXIgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRzb3J0SG9sZGVyLnB1c2goYXJyYXlbaV0pO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChhcnJheVtpXVttZXRob2RdID09PSBhcnJheVtpIC0gMV1bbWV0aG9kXSkge1xuXHRcdFx0c29ydEhvbGRlci5wdXNoKGFycmF5W2ldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c29ydGVkTW92aWVzLnB1c2goc29ydEhvbGRlcik7XG5cdFx0XHRzb3J0SG9sZGVyID0gW2FycmF5W2ldXTtcblx0XHR9XG5cdFx0aWYgKGkgPT09IGFycmF5Lmxlbmd0aCAtIDEpIHtcblx0XHRcdGlmIChzb3J0SG9sZGVyLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0XHRzb3J0ZWRNb3ZpZXMucHVzaChzb3J0SG9sZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHNvcnRlZE1vdmllcztcbn1cblxuLy9mb3Igc29ydGluZyB0aGUgbXlyYXRlIGF0dHJpYnV0ZVxuY29uc3Qgc29ydE15cmF0ZSA9ICh7XG5cdG1vdmllcyxcblx0c29ydE1ldGhvZFxufToge1xuXHRtb3ZpZXM6IElNb3ZpZVtdO1xuXHRzb3J0TWV0aG9kOiBJU29ydE1ldGhvZDtcbn0pOiBJTW92aWVbXSA9PiB7XG5cdHJldHVybiBtb3ZpZXMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGlmIChhLm15cmF0ZSA+IGIubXlyYXRlKSB7XG5cdFx0XHRyZXR1cm4gc29ydE1ldGhvZC5teXJhdGUuc29ydCA9PT0gXCJhc2NcIiA/IDEgOiAtMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNvcnRNZXRob2QubXlyYXRlLnNvcnQgPT09IFwiYXNjXCIgPyAtMSA6IDE7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IHNvcnROYW1lID0gKHsgbW92aWVzLCBzb3J0TWV0aG9kIH0pID0+IHtcblx0cmV0dXJuIG1vdmllcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0aWYgKGEubmFtZS50b0xvd2VyQ2FzZSgpID4gYi5uYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBzb3J0TWV0aG9kLm5hbWUuc29ydCA9PT0gXCJhc2NcIiA/IDEgOiAtMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNvcnRNZXRob2QubmFtZS5zb3J0ID09PSBcImFzY1wiID8gLTEgOiAxO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb3J0ZXIoe1xuXHRzb3J0TWV0aG9kLFxuXHRtb3ZpZXMsXG5cdHNvcnRQcmlvcml0eVxufToge1xuXHRtb3ZpZXM6IElNb3ZpZVtdO1xuXHRzb3J0TWV0aG9kOiBJU29ydE1ldGhvZDtcblx0c29ydFByaW9yaXR5OiBTdHJpbmc7XG59KTogSU1vdmllW10ge1xuXHRpZiAoc29ydE1ldGhvZC5uYW1lLnNvcnQgPT09IFwiXCIgJiYgc29ydE1ldGhvZC5teXJhdGUuc29ydCA9PSBcIlwiKSB7XG5cdFx0cmV0dXJuIG1vdmllcztcblx0fVxuXHRjb25zdCBzb3J0ZWRNb3ZpZXMgPSBbXTtcblx0Y29uc3QgbW92aWVzQ29weSA9IG1vdmllcy5zbGljZSgpO1xuXHRpZiAoc29ydFByaW9yaXR5ID09PSBcIm15cmF0ZVwiKSB7XG5cdFx0Ly9zb3J0IGFycmF5IGJ5IG15cmF0ZVxuXHRcdGNvbnN0IHNvcnRlZFJhdGUgPSBzb3J0TXlyYXRlKHsgbW92aWVzOiBtb3ZpZXNDb3B5LCBzb3J0TWV0aG9kIH0pO1xuXHRcdC8vY29tcHJlc3MgYXJyYXkgaW50byBzdWIgYXJyYXkgaWYgdGhleSBoYXZlIHRoZSBzYW1lIG15cmF0ZSB2YWx1ZVxuXHRcdGNvbnN0IGFycmFuZ2VkID0gYXJyYW5nZVdpdGhDb21tb25zKHtcblx0XHRcdGFycmF5OiBzb3J0ZWRSYXRlLFxuXHRcdFx0bWV0aG9kOiBcIm15cmF0ZVwiXG5cdFx0fSk7XG5cdFx0Ly9zb3J0IHRoZSBpbmRpdmlkdWFsIHN1YiBhcnJheSBhY2NvcmRpbmcgdG8gbmFtZVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYW5nZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHNvcnROYW1lKHsgbW92aWVzOiBhcnJhbmdlZFtpXSwgc29ydE1ldGhvZCB9KTtcblx0XHR9XG5cdFx0Ly9wdXNoIGFsbCBvZiB0aGUgc29ydGVkIGFycmF5IGFuZCBzdWJhcnJheSB0byBzb3J0ZWRNb3ZpZXNcblx0XHRhcnJhbmdlZC5tYXAoc3ViQXJyYXkgPT4ge1xuXHRcdFx0c3ViQXJyYXkubWFwKGFyciA9PiB7XG5cdFx0XHRcdHNvcnRlZE1vdmllcy5wdXNoKGFycik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBzb3J0ZWRNb3ZpZXM7XG5cdH0gZWxzZSBpZiAoc29ydFByaW9yaXR5ID09PSBcIm5hbWVcIikge1xuXHRcdC8vc29ydCBhcnJheSBieSBuYW1lXG5cdFx0Y29uc3Qgc29ydGVkTmFtZSA9IHNvcnROYW1lKHsgbW92aWVzOiBtb3ZpZXNDb3B5LCBzb3J0TWV0aG9kIH0pO1xuXHRcdC8vY29tcHJlc3MgYXJyYXkgaW50byBzdWIgYXJyYXkgaWYgdGhleSBoYXZlIHRoZSBzYW1lIG5hbWUgdmFsdWVcblx0XHRjb25zdCBhcnJhbmdlZCA9IGFycmFuZ2VXaXRoQ29tbW9ucyh7XG5cdFx0XHRhcnJheTogc29ydGVkTmFtZSxcblx0XHRcdG1ldGhvZDogXCJuYW1lXCJcblx0XHR9KTtcblx0XHQvL3NvcnQgdGhlIGluZGl2aWR1YWwgc3ViIGFycmF5IGFjY29yZGluZyB0byBuYW1lXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0c29ydE15cmF0ZSh7IG1vdmllczogYXJyYW5nZWRbaV0sIHNvcnRNZXRob2QgfSk7XG5cdFx0fVxuXHRcdC8vcHVzaCBhbGwgb2YgdGhlIHNvcnRlZCBhcnJheSBhbmQgc3ViYXJyYXkgdG8gc29ydGVkTW92aWVzXG5cdFx0YXJyYW5nZWQubWFwKHN1YkFycmF5ID0+IHtcblx0XHRcdHN1YkFycmF5Lm1hcChhcnIgPT4ge1xuXHRcdFx0XHRzb3J0ZWRNb3ZpZXMucHVzaChhcnIpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHNvcnRlZE1vdmllcztcblx0fSBlbHNlIHtcblx0XHRpZiAoc29ydE1ldGhvZC5uYW1lLnNvcnQgIT09IFwiXCIpIHtcblx0XHRcdHJldHVybiBzb3J0TmFtZSh7IG1vdmllcywgc29ydE1ldGhvZCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNvcnRNeXJhdGUoeyBtb3ZpZXMsIHNvcnRNZXRob2QgfSk7XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tools/sorter.ts\n");

/***/ })

})