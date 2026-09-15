import { useState, useMemo } from 'react';
import { socioMindMapsData } from '../../data/socio/mindMaps';

interface Props {
  singleChapter: number;
}

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

function TreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 1);
  const hasChildren = node.children && node.children.length > 0;
  const isRoot = depth === 0;
  const isBranch = depth === 1;

  return (
    <div className={depth > 0 ? 'animate-fade-in' : ''}>
      <button
        onClick={() => hasChildren && setExpanded(!expanded)}
        className={`w-full flex items-center gap-2 py-1.5 px-2 rounded-lg text-left transition-all duration-150 ${
          isRoot
            ? 'bg-teal-600/15 border border-teal-500/25 text-teal-200 font-bold text-sm'
            : isBranch
            ? 'bg-zinc-800/40 border border-zinc-700/30 text-zinc-200 font-semibold text-xs'
            : 'bg-zinc-900/30 text-zinc-400 text-[11px]'
        } ${hasChildren ? 'active:bg-zinc-700/40 active:scale-[0.98]' : ''}`}
        style={{ marginLeft: depth * 12 }}
      >
        {hasChildren && (
          <svg
            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${expanded ? 'rotate-90' : ''} ${
              isRoot ? 'text-teal-400' : 'text-zinc-500'
            }`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
        {!hasChildren && <span className="w-3 shrink-0" />}
        <span className="truncate">{node.label}</span>
        {hasChildren && (
          <span className={`ml-auto text-[9px] shrink-0 ${isRoot ? 'text-teal-400/60' : 'text-zinc-600'}`}>
            {expanded ? '−' : '+'}{node.children!.length}
          </span>
        )}
      </button>

      {expanded && hasChildren && (
        <div className="mt-0.5 space-y-0.5">
          {node.children!.map((child, i) => (
            <TreeItem key={`${child.label}-${i}`} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function SocioMindMaps({ singleChapter }: Props) {
  const [selectedChapter, setSelectedChapter] = useState(() => {
    if (singleChapter > 0) return socioMindMapsData.findIndex(m => m.chapterId === singleChapter);
    return 0;
  });

  const currentMap = socioMindMapsData[selectedChapter];
  const tree = currentMap?.tree;

  return (
    <div className="flex flex-col h-full px-4 pt-2 pb-4 gap-3">
      {singleChapter === 0 && (
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          {socioMindMapsData.map((ch, idx) => (
            <button
              key={ch.chapterId}
              onClick={() => setSelectedChapter(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                idx === selectedChapter
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 active:bg-zinc-700/50'
              }`}
            >
              Ch {ch.chapterId}
            </button>
          ))}
        </div>
      )}

      {currentMap && (
        <>
          <div className="text-center shrink-0">
            <h3 className="text-white font-bold text-sm">{currentMap.title}</h3>
            <p className="text-zinc-600 text-[10px] mt-0.5">Tap + to expand topics</p>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar rounded-xl bg-zinc-900/30 border border-zinc-800/30 p-2 space-y-0.5" key={selectedChapter}>
            <div className="animate-fade-in">
              {tree?.children?.map((child, i) => (
                <TreeItem key={`${child.label}-${i}`} node={child} depth={0} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
