var p_ioner_navne = ["Ammonium", "Natriumion", "Kaliumion", "Magnesiumion", "Zinkion", "Kobber(II)ion", "Jern(II)ion", "Jern(III)ion", "Calciumion", "Bariumion", "Bly(II)ion", "Sølv(I)ion"];
var n_ioner_navne = ["Nitrat", "Chlorid", "Bromid", "Iodid", "Sulfat", "Carbonat", "Hydroxid", "Sulfid", "Phosphat"];
var reaktions_Array = [
    [
        ["NH<sub>4</sub><sup>+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "NH<sub>4</sub>NO<sub>3</sub>(aq) ", "intet bundfald"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "NH<sub>4</sub>Cl(aq) ", "intet bundfald"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + Br<sup>-</sup>(aq)", "NH<sub>4</sub>Br(aq) ", "intet bundfald"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "NH<sub>4</sub>I(aq) ", "intet bundfald"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>(aq) ", "intet bundfald"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>(aq) ", "intet bundfald"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + OH<sup>-</sup>(aq)", "NaOH(aq)", "no_show"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "(NH<sub>4</sub>)<sub>2</sub>S (aq)", "intet bundfald"],
        ["NH<sub>4</sub><sup>+</sup>(aq) + PO<sub>4</sub><sup>3-</sup>(aq)", "(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub> (aq) ", "intet bundfald"]
    ],
    [
        ["Na<sup>+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", " NaNO<sub>3</sub> (aq)", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", " NaCl (aq) ", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + Br<sup>-</sup>(aq)", "NaBr (aq) ", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "NaI (aq) ", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "Na<sub>2</sub>SO<sub>4</sub> (aq) ", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "Na<sub>2</sub>CO<sub>3</sub> (aq) ", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + OH<sup>-</sup>(aq)", "NaOH (aq) ", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "NaOH (aq) ", "intet bundfald"],
        ["Na<sup>+</sup>(aq) + PO<sub>4</sub><sup>3-</sup>(aq)", "Na<sub>3</sub>PO<sub>4</sub> (aq) ", "intet bundfald"]
    ],
    [
        ["K<sup>+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "KNO<sub>3</sub> (aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "KCl (aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + Br<sup>-</sup>(aq) ", "KBr (aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "KI (aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "K<sub>2</sub>SO<sub>4</sub>(aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "K<sub>2</sub>CO<sub>3</sub>(aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + OH<sup>-</sup>(aq)", "KOH (aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "K<sub>2</sub>S (aq) ", "intet bundfald"],
        ["K<sup>+</sup>(aq) + PO<sub>4</sub><sup>3-</sup>(aq)", "K<sub>3</sub>PO<sub>4</sub>(aq) ", "intet bundfald"]
    ],
    [
        ["Mg<sup>2+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Mg(NO<sub>3</sub>)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Mg<sup>2+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "MgCl<sub>2</sub> (aq) ", "intet bundfald"],
        ["Mg<sup>2+</sup>(aq) + Br<sup>-</sup>(aq)", "MgBr<sub>2</sub> (aq) ", "intet bundfald"],
        ["Mg<sup>2+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "MgI<sub>2</sub> (aq) ", "intet bundfald"],
        ["Mg<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "MgSO<sub>4</sub> (aq) ", "intet bundfald"],
        ["Mg<sup>2+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "MgCO<sub>3</sub>(s)", "Magnesiumcarbonat"],
        ["Mg<sup>2+</sup>(aq) + 2OH<sub></sub><sup>-</sup>(aq)", "Mg(OH)<sub>2</sub>(s)", "Magnesiumhydroxid"],
        ["Mg<sup>2+</sup>(aq) + S<sub>2</sub>.(aq)", "MgS(s)", "Magnesiumsulfid"],
        ["3Mg<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3-</sup>(aq)", "Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(s)", "Magnesiumphosphat"],
    ],
    [
        ["Zn<sup>2+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Zn(NO<sub>3</sub>)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Zn<sup>2+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "ZnCl<sub>2</sub> (aq) ", "intet bundfald"],
        ["Zn<sup>2+</sup>(aq) + Br<sup>-</sup>(aq)", "ZnBr<sub>2</sub> (aq) ", "intet bundfald"],
        ["Zn<sup>2+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "ZnI<sub>2</sub> (aq) ", "intet bundfald"],
        ["Zn<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "ZnSO<sub>4</sub> (aq) ", "intet bundfald"],
        ["Zn<sup>2+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "ZnCO<sub>3</sub>(s)", "Zink(II)carbonat"],
        ["Zn<sup>2+</sup>(aq) + 2OH<sup>-</sup>(aq)", "Zn(OH)<sub>2</sub>(s)", "Zink(II)hydroxid"],
        ["Zn<sup>2+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "ZnS(s)", "Zink(II)sulfid"],
        ["3Zn<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3-</sup>(aq)", "Zn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(s)", "Zink(II)phosphat"]
    ],
    [
        ["Cu<sup>2+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Cu(NO<sub>3</sub>)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Cu<sup>2+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "CuCl<sub>2</sub> (aq) ", "intet bundfald"],
        ["Cu<sup>2+</sup>(aq) + Br<sup>-</sup>(aq)", "CuBr<sub>2</sub> (aq) ", "intet bundfald"],
        ["Cu<sup>2+</sup>(aq) + 3<span class='CapitalI'>I</span><sup>-</sup>(aq)", "Cu<span class='CapitalI'>I</span>(s) + <span class='CapitalI'>I</span><sub>2</sub>(aq)", "no_show"],
        ["Cu<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "CuSO<sub>4</sub> (aq)", "intet bundfald"],
        ["Cu<sup>2+</sup>(aq) + 2CO<sub>3</sub><sup>2-</sup>(aq)", "CuO<sub>2</sub>(s) + 2CO<sub>2</sub>(g)", "no_show"],
        ["Cu<sup>2+</sup>(aq) + 2OH<sup>-</sup>(aq)", "Cu(OH)<sub>2</sub>(s)", "Kobber(II)hydroxid"],
        ["Cu<sup>2+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "CuS(s)", "Kobber(II)sulfid"],
        ["3Cu<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3-</sup>(aq)", "Cu<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(s)", "Kobber(II)phosphat"]
    ],
    [
        ["Fe<sup>2+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Fe(NO<sub>3</sub>)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>2+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "FeCl<sub>2</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>2+</sup>(aq) + Br<sup>-</sup>(aq)", "FeBr<sub>2</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>2+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "FeI<sub>2</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "FeSO<sub>4</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>2+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "FeCO<sub>3</sub>(s)", "Jern(II)carbonat"],
        ["Fe<sup>2+</sup>(aq) + 2OH<sup>-</sup>(aq)", "Fe(OH)<sub>2</sub>(s)", "Jern(II)hydroxid"],
        ["Fe<sup>2+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "FeS(s)", "Jern(II)sulfid"],
        ["3Fe<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3-</sup>(aq)", "Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(s)", "Jern(II)phosphat"]
    ],
    [
        ["Fe<sup>3+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Fe(NO<sub>3</sub>)<sub>3</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>3+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "FeCl<sub>3</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>3+</sup>(aq) + Br<sup>-</sup>(aq)", "FeBr<sub>3</sub> (aq) ", "intet bundfald"],
        ["2Fe<sup>3+</sup>(aq) + 2<span class='CapitalI'>I</span><sup>-</sup>(aq)", "2Fe<sup>2+</sup>(aq) + <span class='CapitalI'>I</span><sub>2</sub>(aq)", "no_show"],
        ["Fe<sup>3+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> (aq) ", "intet bundfald"],
        ["Fe<sup>3+</sup>(aq) + 3CO<sub>3</sub><sup>2-</sup>(aq)", "Fe<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>(s)", "no_show"],
        [" Fe<sup>3+</sup>(aq) + 3OH<sup>-</sup>(aq)", "Fe(OH)<sub>3</sub>(s)", "Jern(III)hydroxid"],
        ["2Fe<sup>3+</sup>(aq) + 3S<sub>2</sub><sup>-</sup>(aq)", "Fe<sub>2</sub>S<sub>3</sub>(s)", "Jern(III)sulfid"],
        ["Fe<sup>3+</sup>(aq) + PO<sub>4</sub><sup>3-</sup>(aq)", "FePO<sub>4</sub>(s)", "Jern(III)phosphat"]
    ],
    [
        ["Ca<sup>2+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Ca(NO<sub>3</sub>)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ca<sup>2+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "CaCl<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ca<sup>2+</sup>(aq) + Br<sup>-</sup>(aq)", "CaBr<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ca<sup>2+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "CaI<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ca<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "CaSO<sub>4</sub>(s)", "Calciumsulfat"],
        ["Ca<sup>2+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "CaCO<sub>3</sub>(s)", "Calciumcarbonat"],
        ["Ca<sup>2+</sup>(aq) + 2OH<sup>-</sup>(aq)", "Ca(OH)<sub>2</sub>(s)", "Calciumhydroxid"],
        ["Ca<sup>2+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "CaS(s)", "Calciumsulfid"],
        ["3Ca<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3-</sup>(aq)", "Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(s)", "Calciumphosphat"]
    ],
    [
        ["Ba<sup>2+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Ba(NO<sub>3</sub>)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ba<sup>2+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "BaCl<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ba<sup>2+</sup>(aq) + Br<sup>-</sup>(aq)", "BaBr<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ba<sup>2+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "BaI<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ba<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "BaSO<sub>4</sub>(s)", "Bariumsulfat"],
        ["Ba<sup>2+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "BaCO<sub>3</sub>(s)", "Bariumcarbonat"],
        ["Ba<sup>2+</sup>(aq) + 2OH<sup>-</sup>(aq)", "Ba(OH)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Ba<sup>2+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "BaS(s)", "Bariumsulfid"],
        ["3Ba<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3-</sup>(aq)", "Ba3(PO<sub>4</sub>) 2(s)", "Bariumphosfat"]
    ],
    [
        ["Pb<sup>2+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", "Pb(NO<sub>3</sub>)<sub>2</sub> (aq) ", "intet bundfald"],
        ["Pb<sup>2+</sup>(aq) + 2C<span class='small_l'>l</span><sup>-</sup>(aq)", "PbC<span class='small_l'>l</span><sub>3</sub>(s)", "Bly(II)chlorid"],
        ["Pb<sup>2+</sup>(aq) + 2Br<sup>-</sup>(aq)", "PbBr<sub>3</sub>(s)", "Bly(II)bromid"],
        ["Pb<sup>2+</sup>(aq) + 2<span class='CapitalI'>I</span><sup>-</sup>(aq)", "Pb<span class='CapitalI'>I</span><sub>3</sub>(s)", "Bly(II)iodid"],
        ["Pb<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "PbSO<sub>4</sub>(s)", "Bly(II)sulfat"],
        ["Pb<sup>2+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "PbCO<sub>3</sub>(s)", "Bly(II)carbonat"],
        ["Pb<sup>2+</sup>(aq) + 2OH<sup>-</sup>(aq)", "Pb(OH)<sub>2</sub>(s)", "Bly(II)hydroxid"],
        ["Pb<sup>2+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "PbS(s)", "Bly(II)sulfid"],
        ["Pb<sup>2+</sup>(aq) + 2PO<sub>4</sub><sup>3-</sup>(aq)", "Pb<sub>3</sub>(PO<sub>4</sub>) 2(s)", "Bly(II)phosphat"]
    ],
    [
        ["Ag<sup>+</sup>(aq) + NO<sub>3</sub><sup>-</sup>(aq)", " AgNO<sub>3</sub> (aq)", "intet bundfald"],
        ["Ag<sup>+</sup>(aq) + C<span class='small_l'>l</span><sup>-</sup>(aq)", "AgC<span class='small_l'>l</span>(s)", "Sølv(I)chlorid"],
        ["Ag<sup>+</sup>(aq) + Br<sup>-</sup>(aq)", "AgBr(s)", "Sølv(I)bromid"],
        ["Ag<sup>+</sup>(aq) + <span class='CapitalI'>I</span><sup>-</sup>(aq)", "Ag<span class='CapitalI'>I</span>(s)", "Sølv(I)iodid"],
        ["2Ag<sup>+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq)", "Ag<sub>2</sub>SO<sub>4</sub>(s)", "Sølv(I)sulfat"],
        ["2Ag<sup>+</sup>(aq) + CO<sub>3</sub><sup>2-</sup>(aq)", "Ag<sub>2</sub>CO<sub>3</sub>(s)", "Sølv(I)carbonat"],
        ["2Ag<sup>+</sup>(aq) + 2OH<sup>-</sup>(aq)", "Ag<sub>2</sub>O(s) + H2O(l)", "no_show"],
        ["2Ag<sup>+</sup>(aq) + S<sub>2</sub><sup>-</sup>(aq)", "Ag<sub>2</sub>S(s)", "Sølv(I)sulfid"],
        ["3Ag<sup>+</sup>(aq) + PO<sub>4</sub><sup>3-</sup>(aq)", "Ag<sub>3</sub>PO<sub>4</sub>2(s)", "Sølv(I)phosphat"]
    ]
];
var svar_Array = [
    [
        ["NH<sub>4</sub>(NO<sub>3</sub>)<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>NO<sub>3</sub> (s)", "NH<sub>4</sub>NO<sub>3</sub> (s)"],
        ["NH<sub>4</sub>Cl<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>Cl (s)", "NH<sub>4</sub>Cl (s)"],
        ["NH<sub>4</sub>Br<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>Br (s)", "NH<sub>4</sub>Br (s)"],
        ["NH<sub>4</sub>I<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>I (s)", "NH<sub>4</sub>I (s)"],
        ["NH<sub>4</sub>SO<sub>4</sub> (s)", "NH<sub>4</sub>(SO<sub>4</sub>)<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> (s)"],
        ["NH<sub>4</sub>CO<sub>3</sub> (s)", "NH<sub>4</sub>(CO<sub>3</sub>)<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> (s)"],
        ["NH<sub>4</sub>S<sub>2</sub> (s)", "(NH<sub>4</sub>)<sub>2</sub>S (s)", "NH<sub>4</sub>S (s)"],
        ["NH<sub>4</sub>PO<sub>4</sub> (s)", "NH<sub>4</sub>(PO<sub>4</sub>)<sub>3</sub> (s)", "(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub> (s)"]
    ],
    [
        ["Na(NO<sub>3</sub>)<sub>2</sub> (s)", "Na<sub>2</sub>NO<sub>3</sub> (s)", "NaNO<sub>3</sub> (s)"],
        ["NaCl<sub>2</sub> (s)", "Na<sub>2</sub>Cl (s)", "NaCl (s)"],
        ["NaBr<sub>2</sub> (s)", "Na<sub>2</sub>Br (s)", "NaBr (s)"],
        ["NaI<sub>2</sub> (s)", "Na<sub>2</sub>I (s)", "NaI (s)"],
        ["NaSO<sub>4</sub> (s)", "Na(SO<sub>4</sub>)<sub>2</sub> (s)", "Na<sub>2</sub>SO<sub>4</sub> (s)"],
        ["NaCO<sub>3</sub> (s)", "Na(CO<sub>3</sub>)<sub>2</sub> (s)", "Na<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Na(OH)<sub>2</sub> (s)", "Na<sub>2</sub>OH (s)", "NaOH (s)"],
        ["NaS<sub>2</sub> (s)", "Na<sub>2</sub>S (s)", "NaS (s)"],
        ["NaPO<sub>4</sub> (s)", "Na(PO<sub>4</sub>)<sub>3</sub> (s)", "Na<sub>3</sub>PO<sub>4</sub> (s)"]
    ],
    [
        ["K(NO<sub>3</sub>)<sub>2</sub> (s)", "K<sub>2</sub>NO<sub>3</sub> (s)", "KNO<sub>3</sub> (s)"],
        ["KCl<sub>2</sub> (s)", "K<sub>2</sub>Cl (s)", "KCl (s)"],
        ["KBr<sub>2</sub> (s)", "K<sub>2</sub>Br (s)", "KBr (s)"],
        ["KI<sub>2</sub> (s)", "K<sub>2</sub>I (s)", "KI (s)"],
        ["KSO<sub>4</sub> (s)", "K(SO<sub>4</sub>)<sub>2</sub> (s)", "K<sub>2</sub>SO<sub>4</sub> (s)"],
        ["KCO<sub>3</sub> (s)", "K(CO<sub>3</sub>)<sub>2</sub> (s)", "K<sub>2</sub>CO<sub>3</sub> (s)"],
        ["K(OH)<sub>2</sub> (s)", "K<sub>2</sub>OH (s)", "KOH (s)"],
        ["KS<sub>2</sub> (s)", "K<sub>2</sub>S (s)", "KS (s)"]
    ],
    [
        ["KPO<sub>4</sub> (s)", "K(PO<sub>4</sub>)<sub>3</sub> (s)", "K<sub>3</sub>PO<sub>4</sub> (s)"],
        ["Mg(NO<sub>3</sub>)<sub>2</sub> (s)", "Mg<sub>2</sub>NO<sub>3</sub> (s)", "MgNO<sub>3</sub> (s)"],
        ["MgCl<sub>2</sub> (s)", "Mg<sub>2</sub>Cl (s)", "MgCl (s)"],
        ["MgBr<sub>2</sub> (s)", "Mg<sub>2</sub>Br (s)", "MgBr (s)"],
        ["MgI<sub>2</sub> (s)", "Mg<sub>2</sub>I (s)", "MgI (s)"],
        ["MgSO<sub>4</sub> (s)", "Mg(SO<sub>4</sub>)<sub>2</sub> (s)", "Mg<sub>2</sub>SO<sub>4</sub> (s)"],
        ["MgCO<sub>3</sub> (aq)", "Mg<sub>2</sub>CO<sub>3</sub> (s)", "Mg(CO<sub>3</sub>)<sub>2</sub> (s)"],
        ["Mg(OH)<sub>2</sub> (aq)", "MgOH (s)", "Mg<sub>2</sub>OH (s)"],
        ["MgS (aq)", "Mg<sub>2</sub>S (s)", "MgS<sub>2</sub> (s)"],
        ["Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "Mg<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)", "MgPO<sub>4</sub> (s)"]
    ],
    [
        ["Zn(NO<sub>3</sub>)<sub>2</sub> (s)", "Zn<sub>2</sub>NO<sub>3</sub> (s)", "ZnNO<sub>3</sub> (s)"],
        ["ZnCl<sub>2</sub> (s)", "Zn<sub>2</sub>Cl (s)", "ZnCl (s)"],
        ["ZnBr<sub>2</sub> (s)", "Zn<sub>2</sub>Br (s)", "ZnBr (s)"],
        ["ZnI<sub>2</sub> (s)", "Zn<sub>2</sub>I (s)", "ZnI (s)"],
        ["ZnSO<sub>4</sub> (s)", "Zn(SO<sub>4</sub>)<sub>2</sub> (s)", "Zn<sub>2</sub>SO<sub>4</sub> (s)"],
        ["ZnCO<sub>3</sub> (aq)", "Zn<sub>2</sub>CO<sub>3</sub> (s)", "Zn(CO<sub>3</sub>)<sub>2</sub> (s)"],
        ["Zn(OH)<sub>2</sub> (aq)", "ZnOH (s)", "Zn<sub>2</sub>OH (s)"],
        ["ZnS (aq)", "Zn<sub>2</sub>S (s)", "ZnS<sub>2</sub> (s)"],
        ["Zn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "ZnPO<sub>4</sub> (s)", "Zn<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Cu(NO<sub>3</sub>)<sub>2</sub> (s)", "Cu<sub>2</sub>NO<sub>3</sub> (s)", "CuNO<sub>3</sub> (s)"],
        ["CuCl<sub>2</sub> (s)", "Cu<sub>2</sub>Cl (s)", "CuCl (s)"],
        ["CuBr<sub>2</sub> (s)", "Cu<sub>2</sub>Br (s)", "CuBr (s)"],
        ["mangler"],
        ["CuSO<sub>4</sub> (s)", "Cu(SO<sub>4</sub>)<sub>2</sub> (s)", "Cu<sub>2</sub>SO<sub>4</sub> (s)"],
        ["mangler"],
        ["Cu(OH)<sub>2</sub> (aq)", "CuOH (s)", "Cu<sub>2</sub>OH (s)"],
        ["CuS (aq)", "Cu<sub>2</sub>S (s)", "CuS<sub>2</sub> (s)"],
        ["Cu<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "CuPO<sub>4</sub> (s)", "Cu<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Fe(NO<sub>3</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>NO<sub>3</sub> (s)", "FeNO<sub>3</sub> (s)"],
        ["FeCl<sub>2</sub> (s)", "Fe<sub>2</sub>Cl (s)", "FeCl (s)"],
        ["FeBr<sub>2</sub> (s)", "Fe<sub>2</sub>Br (s)", "FeBr (s)"],
        ["FeI<sub>2</sub> (s)", "Fe<sub>2</sub>I (s)", "FeI (s)"],
        ["FeSO<sub>4</sub> (s)", "Fe(SO<sub>4</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>SO<sub>4</sub> (s)"],
        ["FeCO<sub>3</sub> (aq)", "Fe(CO<sub>3</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Fe(OH)<sub>2</sub> (aq)", "FeOH (s)", "Fe<sub>2</sub>OH (s)"],
        ["FeS (aq)", "Fe<sub>2</sub>S (s)", "FeS<sub>2</sub> (s)"],
        ["Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "FePO<sub>4</sub> (s)", "Fe<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Fe(NO<sub>3</sub>)<sub>3</sub> (s)", "Fe<sub>3</sub>NO<sub>3</sub> (s)", "FeNO<sub>3</sub> (s)"],
        ["FeCl<sub>3</sub> (s)", "Fe<sub>3</sub>Cl (s)", "FeCl (s)"],
        ["FeBr<sub>2</sub> (s)", "Fe<sub>2</sub>Br (s)", "FeBr (s)"],
        ["mangler"],
        ["FeSO<sub>4</sub> (s)", "Fe(SO<sub>4</sub>)<sub>3</sub> (s)", "Fe<sub>3</sub>SO<sub>4</sub> (s)"],
        ["mangler"],
        ["Fe(OH)<sub>3</sub> (aq)", "FeOH (s)", "Fe<sub>3</sub>OH (s)"],
        ["Fe<sub>2</sub>S<sub>3</sub> (aq)", "FeS (s)", "Fe<sub>3</sub>S<sub>2</sub> (s)"],
        ["FePO<sub>4</sub> (aq)", "Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (s)", "Fe<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Ca(NO<sub>3</sub>)<sub>2</sub> (s)", "Ca<sub>2</sub>NO<sub>3</sub> (s)", "CaNO<sub>3</sub> (s)"],
        ["CaCl<sub>2</sub> (s)", "Ca<sub>2</sub>Cl (s)", "CaCl (s)"],
        ["CaBr<sub>2</sub> (s)", "Ca<sub>2</sub>Br (s)", "CaBr (s)"],
        ["CaI<sub>2</sub> (s)", "Ca<sub>2</sub>I (s)", "CaI (s)"],
        ["CaSO<sub>4</sub> (aq)", "Ca(SO<sub>4</sub>)<sub>2</sub> (s)", "Ca<sub>2</sub>SO<sub>4</sub> (s)"],
        ["CaCO<sub>3</sub> (aq)", "Ca(CO<sub>3</sub>)<sub>2</sub> (s)", "Ca<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Ca(OH)<sub>2</sub> (aq)", "CaOH (s)", "Ca<sub>2</sub>OH (s)"],
        ["CaS (aq)", "Ca<sub>2</sub>S (s)", "CaS<sub>2</sub> (s)"],
        ["Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "CaPO<sub>4</sub> (s)", "Ca<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Ba(NO<sub>3</sub>)<sub>2</sub> (s)", "Ba<sub>2</sub>NO<sub>3</sub> (s)", "BaNO<sub>3</sub> (s)"],
        ["BaCl<sub>2</sub> (s)", "Ba<sub>2</sub>Cl (s)", "BaCl (s)"],
        ["BaBr<sub>2</sub> (s)", "Ba<sub>2</sub>Br (s)", "BaBr (s)"],
        ["BaI<sub>2</sub> (s)", "Ba<sub>2</sub>I (s)", "BaI (s)"],
        ["BaSO<sub>4</sub> (aq)", "Ba(SO<sub>4</sub>)<sub>2</sub> (s)", "Ba<sub>2</sub>SO<sub>4</sub> (s)"],
        ["BaCO<sub>3</sub> (aq)", "Ba(CO<sub>3</sub>)<sub>2</sub> (s)", "Ba<sub>2</sub>CO<sub>3</sub> (s)"],
        ["BaOH (s)", "Ba<sub>2</sub>OH (s)", "Ba(OH)<sub>2</sub> (s)"],
        ["BaS (aq)", "Ba<sub>2</sub>S (s)", "BaS<sub>2</sub> (s)"],
        ["Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "BaPO<sub>4</sub> (s)", "Ba<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Pb(NO<sub>3</sub>)<sub>2</sub> (s)", "Pb<sub>2</sub>NO<sub>3</sub> (s)", "PbNO<sub>3</sub> (s)"],
        ["PbCl<sub>2</sub> (aq)", "Pb<sub>2</sub>Cl (s)", "PbCl (s)"],
        ["PbBr<sub>2</sub> (aq)", "Pb<sub>2</sub>Br (s)", "PbBr (s)"],
        ["PbI<sub>2</sub> (aq)", "Pb<sub>2</sub>I (s)", "PbI (s)"],
        ["PbSO<sub>4</sub> (aq)", "Pb(SO<sub>4</sub>)<sub>2</sub> (s)", "Pb<sub>2</sub>SO<sub>4</sub> (s)"],
        ["PbCO<sub>3</sub> (aq)", "Pb(CO<sub>3</sub>)<sub>2</sub> (s)", "Pb<sub>2</sub>CO<sub>3</sub> (s)"],
        ["Pb(OH)<sub>2</sub> (aq)", "PbOH (s)", "Pb<sub>2</sub>OH (s)"],
        ["PbS (aq)", "Pb<sub>2</sub>S (s)", "PbS<sub>2</sub> (s)"],
        ["Pb<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> (aq)", "PbPO<sub>4</sub> (s)", "Pb<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ],
    [
        ["Ag(NO<sub>3</sub>)<sub>2</sub> (s)", "Ag<sub>2</sub>NO<sub>3</sub> (s)", "AgNO<sub>3</sub> (s)"],
        ["AgCl (aq)", "AgCl<sub>2</sub> (s)", "Ag<sub>2</sub>Cl (s)"],
        ["AgBr (aq)", "AgBr<sub>2</sub> (s)", "Ag<sub>2</sub>Br (s)"],
        ["AgI (aq)", "AgI<sub>2</sub> (s)", "Ag<sub>2</sub>I (s)"],
        ["Ag<sub>2</sub>SO<sub>4</sub> (aq)", "AgSO<sub>4</sub> (s)", "Ag(SO<sub>4</sub>)<sub>2</sub> (s)"],
        ["Ag<sub>2</sub>CO<sub>3</sub> (aq)", "AgCO<sub>3</sub> (s)", "Ag(CO<sub>3</sub>)<sub>2</sub> (s)"],
        ["mangler"],
        ["Ag<sub>2</sub>S (aq)", "AgS<sub>2</sub> (s)", "AgS (s)"],
        ["Ag<sub>3</sub>PO<sub>4</sub> (aq)", "AgPO<sub>4</sub> (s)", "Ag(PO<sub>4</sub>)<sub>3</sub> (s)"]
    ]
]; //Syntax: positiv ion, negativ ion, fejl_feedback_1, fejl_feedback var opgaveformulerings_Array = [ [1, 0, "", "intet bundfald", "BaSO<sub>4</sub>(s)"], [], [] ];
