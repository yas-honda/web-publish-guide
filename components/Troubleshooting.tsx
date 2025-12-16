import React from 'react';
import { HelpCircle, AlertOctagon, LayoutTemplate } from 'lucide-react';

export const Troubleshooting: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in">
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
          <div className="ml-6 space-y-3 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">ファイル名が index.html になっていますか？</p>
              <p>Index.html (大文字) や home.html ではダメです。</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">反映に時間がかかっているかも？</p>
              <p>反映に数分かかることがあります。5分ほど待ってからブラウザを再読み込み（リロード）してみてください。</p>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h4 className="flex items-center gap-2 font-bold text-slate-700 mb-2">
            <LayoutTemplate className="w-4 h-4 text-amber-500" />
            デザインが崩れている
          </h4>
          <div className="ml-6 space-y-2 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">CSSや画像ファイルはありますか？</p>
            <p>
              CSSや画像を別のファイルに分けている場合、それらも一緒にアップロードしましたか？
            </p>
            <div className="bg-slate-50 p-2 rounded text-xs mt-2">
              <span className="font-bold">ヒント：</span>
              Google AI Studioが一つのHTMLファイル内にCSS（<code>&lt;style&gt;</code>タグ）も含めて作ってくれている場合は、<code>index.html</code> だけで大丈夫です。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};