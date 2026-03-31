/*
* File: triangle.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-31
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

function calcArea(aSide, bSide, cSide) {
    const s = (aSide + bSide + cSide) / 2
    const area = Math.sqrt(s * (s - aSide) * (s - bSide) * (s - cSide))
    return area
}

export { calcArea }
