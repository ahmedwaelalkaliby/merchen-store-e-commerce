import React from "react";
import { TbWashTumbleOff } from "react-icons/tb";
import { TbWashDrycleanOff } from "react-icons/tb";
import { TbIroning1 } from "react-icons/tb";
import { TbBleachOff } from "react-icons/tb";
import { TbWashTemperature3 } from "react-icons/tb";
export default function CompositionAndCare({
  composition,
  careDesc,
  careObj,
  traceabilityDesc,
  traceabilityObj,
  packaging,
}) {
  const { wash, bleach, iron, dryClean, tumble } = careObj;
  const { weaving, production } = traceabilityObj;
  return (
    <div className="ml-8 mb-3 text-xs">
      <ul className="flex flex-col gap-7">
        <li className="flex flex-col gap-4">
          <h4 className="font-bold tracking-wide">Composition</h4>
          <ul className="ml-3">
            {composition.map((comp) => {
              return (
                <li key={comp} className="mb-2">
                  {comp}
                </li>
              );
            })}
          </ul>
        </li>
        <li className="flex flex-col gap-3">
          <h4 className="font-bold tracking-wide">Care</h4>
          <p className="ml-3">{careDesc}</p>
          <ul className="ml-3 flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <TbWashTemperature3 size={20} />
              <span>{wash}</span>
            </li>
            <li className="flex items-center gap-2">
              <TbBleachOff size={20} />
              <span>{bleach}</span>
            </li>
            <li className="flex items-center gap-2">
              <TbIroning1 size={20} />
              <span>{iron}</span>
            </li>
            <li className="flex items-center gap-2">
              <TbWashDrycleanOff size={20} />
              <span>{dryClean}</span>
            </li>
            <li className="flex items-center gap-2">
              <TbWashTumbleOff size={20} />
              <span>{tumble}</span>
            </li>
          </ul>
        </li>

        <li className="flex flex-col gap-3">
          <h4 className="font-bold tracking-wide">Traceability</h4>
          <p className="ml-3">{traceabilityDesc}</p>
          <div className="ml-3">
            <p>Weaving: {weaving}</p>
            <p>Production: {production}</p>
          </div>
        </li>
        <li className="flex flex-col gap-3">
          <h4 className="font-bold tracking-wide">Packaging</h4>
          <p className="ml-3">{packaging}</p>
        </li>
      </ul>
    </div>
  );
}
