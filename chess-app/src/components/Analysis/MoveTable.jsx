import React from 'react';

export const MoveTable = ({ moves }) => {
  return (
    <div className="w-full h-[400px] bg-[#262421] rounded-md overflow-hidden flex flex-col border border-slate-700">
      <div className="p-2 bg-[#2d2b28] text-gray-400 text-xs font-bold uppercase">سجل النقلات</div>
      <div className="overflow-y-auto flex-grow p-2">
        <table className="w-full text-sm text-right">
          <tbody>
            {moves.map((m, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#2a2825]' : ''}>
                <td className="p-2 text-gray-500 w-8">{Math.floor(index / 2) + 1}.</td>
                <td className="p-2 font-medium">
                  {m.san}
                  {/* علامة النقلة العبقرية مستوحاة من اهتماماتك */}
                  {m.isBrilliant && (
                    <span className="mr-2 inline-block w-4 h-4 bg-cyan-500 rounded-full text-[10px] text-center text-white">!!</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};