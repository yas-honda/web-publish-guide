import React from 'react';
import { HelpCircle, AlertOctagon, Github } from 'lucide-react';

export const Troubleshooting: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-2">
        <HelpCircle className="text-slate-500 w-5 h-5" />
        <h3 className="font-bold text-slate-700">よくあるトラブル</h3>
      </div>
      
      <div className="divide-y divide-slate-100">
        <div className="p-5">
          <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2">
            <Github className="w-4 h-4" />
            GitHub連携ができない・Pushできない
          </h4>
          <div className="ml-6 space-y-2 text-sm text-slate-600">
            <p>
              ブラウザのポップアップブロックが作動している可能性があります。アドレスバーにブロック通知が出ていないか確認してください。
            </p>
            <p>
              また、既に同じ名前のリポジトリがGitHubに存在する場合、Pushに失敗することがあります。リポジトリ名を変えて試してください。
            </p>
          </div>
        </div>

        <div className="p-5">
          <h4 className="flex items-center gap-2 font-bold text-red-600 mb-2">
            <AlertOctagon className="w-4 h-4" />
            404 Not Found が出る（公開後）
          </h4>
          <div className="ml-6 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">原因：反映待ち</span><br/>
              設定してからWebサイトが見られるようになるまで、数分（場合によっては10分程度）かかることがあります。少し待ってからブラウザをリロードしてください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};