import { Station } from "../../model/station.js"

export const stations = {
    "교대": new Station("교대", ["2호선", "3호선"], ["강남", "남부터미널"]),
    "강남": new Station("강남", ["2호선", "신분당선"], ["역삼", "양재"]),
    "역삼": new Station("역삼", ["2호선"]),
    "남부터미널": new Station("남부터미널", ["3호선"], ["양재"]),
    "양재": new Station("양재", ["3호선", "신분당선"], ["매봉", "양재시민의숲"]),
    "매봉": new Station("매봉", ["3호선"]),
    "양재시민의숲": new Station("양재시민의숲", ["신분당선"])
};