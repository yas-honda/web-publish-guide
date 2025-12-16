import React from 'react';
import { HelpCircle, AlertOctagon, LayoutTemplate, FileQuestion } from 'lucide-react';

export const Troubleshooting: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-2">
        <HelpCircle className="text-slate-500 w-5 h-5" />
        <h3 className="font-bold text-slate-700">うまくいかないときは？</h3>
      </div>
      
      <div className="divide-y divide-slate-100">
        <div className="p-5">
          <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2">
            <AlertOctagon className="w-4 h-4 text-red-500" />
            404 Not Found が出る
          </h4>
          <div className="ml-6 space-y-2 text-sm text-slate-600">
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">ファイル名の確認：</span>
                <code>index.html</code> になっていますか？ <code>Index.html</code> (大文字) や <code>home.html</code> では表示されません。
              </li>
              <li>
                <span className="font-semibold">待ち時間：</span>
                反映に数分かかることがあります。5分ほど待ってからブラウザを再読み込み（リロード）してみてください。
              </li>
            </ul>
          </div>
        </div>

        <div className="p-5">
          <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2">
            <LayoutTemplate className="w-4 h-4 text-amber-500" />
            デザインが崩れている
          </h4>
          <div className="ml-6 space-y-2 text-sm text-slate-600">
            <p>
              CSSや画像を別のファイルに分けている場合、それらも一緒にアップロードしましたか？
            </p>
            <p className="bg-slate-50 p-2 rounded text-xs">
              Google AI Studioが一つのHTMLファイル内にCSS（<code>&lt;style&gt;</code>タグ）も含めて作ってくれている場合は、<code>index.html</code> だけで大丈夫です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};