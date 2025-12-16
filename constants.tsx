import React from 'react';
import { StepData } from './types';
import { FileCode, Github, UploadCloud, Globe, Settings, Save, Plus, FolderGit2, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export const STEPS: StepData[] = [
  {
    id: 1,
    title: "準備：コードを保存",
    shortTitle: "PCに保存",
    description: "Google AI Studioで作ったHTMLコードを、自分のパソコンに保存します。",
    icon: Save,
    tips: [
      "メモ帳(Windows)やテキストエディット(Mac)など、普段使っているテキストエディタでOKです。",
      "拡張子（.html）を忘れずに付けてください。"
    ],
    details: (
      <div className="space-y-4">
        <p>まず、Google AI StudioのコードをPC上のファイルにします。</p>
        
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <div className="flex gap-3">
            <div className="bg-slate-100 p-2 h-fit rounded-full text-slate-600 font-bold shrink-0 w-8 h-8 flex items-center justify-center">1</div>
            <div>
              <p className="font-medium">コードをコピー</p>
              <p className="text-sm text-slate-600">Google AI Studioで生成されたHTMLコードをコピーします。</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-slate-100 p-2 h-fit rounded-full text-slate-600 font-bold shrink-0 w-8 h-8 flex items-center justify-center">2</div>
            <div>
              <p className="font-medium">ファイルを作成</p>
              <p className="text-sm text-slate-600">PCのメモ帳やテキストエディタを開き、貼り付けます。</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-slate-100 p-2 h-fit rounded-full text-slate-600 font-bold shrink-0 w-8 h-8 flex items-center justify-center">3</div>
            <div className="w-full">
              <p className="font-medium">名前を付けて保存</p>
              <div className="mt-2 bg-amber-50 p-3 rounded-lg border border-amber-200 text-sm">
                <div className="flex items-start gap-2">
                   <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                   <div>
                     <p className="font-bold text-amber-800 mb-1">重要：ファイル名は「index.html」</p>
                     <p className="text-amber-900 leading-relaxed">
                       必ず半角小文字で <code className="bg-amber-100 px-1 rounded font-bold">index.html</code> にしてください。<br/>
                       <code className="text-slate-500">Index.html</code> や <code className="text-slate-500">home.html</code> という名前だと、GitHub Pagesがトップページとして認識してくれません。
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "箱を作る：リポジトリ作成",
    shortTitle: "箱を作る",
    description: "GitHub上にファイルを置くための場所（リポジトリ）を作ります。",
    icon: FolderGit2,
    details: (
      <div className="space-y-4">
        <p>GitHubにログインして、新しい箱を用意します。</p>
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm space-y-4">
           <ol className="space-y-4 text-slate-700 text-sm">
             <li className="flex gap-2">
               <span className="font-bold text-blue-600">1.</span>
               <span>
                 <strong>新規作成画面へ：</strong><br/>
                 画面右上の「＋」アイコンから <span className="inline-block bg-slate-100 px-1 border rounded">New repository</span> をクリックします。
               </span>
             </li>
             <li className="flex gap-2">
               <span className="font-bold text-blue-600">2.</span>
               <span>
                 <strong>Repository name：</strong><br/>
                 好きな名前を入力します（例: <code className="bg-slate-100 px-1">my-ai-site</code> など）。<br/>
                 <span className="text-xs text-slate-500">※ これがURLの一部になります。</span>
               </span>
             </li>
             <li className="flex gap-2">
               <span className="font-bold text-blue-600">3.</span>
               <div className="flex-1">
                 <strong>Public / Private：</strong>
                 <div className="mt-1 bg-slate-50 p-3 rounded text-xs text-slate-600 border border-slate-100">
                   <p className="mb-2">
                     <strong className="text-slate-800">Public（推奨）</strong>：誰でも見れます。無料プランでの標準です。
                   </p>
                   <p>
                     <strong className="text-slate-800">Private</strong>：自分だけ見れます。<br/>
                     ※現在は無料でもPrivateリポジトリのPages公開は可能ですが、設定が少し異なる場合があります。基本はPublicで良いでしょう。
                   </p>
                 </div>
               </div>
             </li>
             <li className="flex gap-2">
               <span className="font-bold text-blue-600">4.</span>
               <span>
                 <strong>作成：</strong><br/>
                 一番下の <span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded text-xs">Create repository</span> ボタンをクリックします。
               </span>
             </li>
           </ol>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "入れる：アップロード",
    shortTitle: "入れる",
    description: "さきほど保存した index.html をGitHubに入れます。",
    icon: UploadCloud,
    details: (
      <div className="space-y-4">
        <p>難しいコマンド（git pushなど）は使いません。Web画面からアップロードする方法が簡単です。</p>
        
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><Plus className="w-4 h-4" /></div>
              アップロード画面へ
            </h4>
            <div className="text-sm text-slate-600 ml-9">
              <p className="mb-2">リポジトリ作成直後の画面にあるリンク <span className="text-blue-600 underline">uploading an existing file</span> をクリックします。</p>
              <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                ※ もし見当たらない場合は、画面上の [Add file] ▼ ボタンを押し、[Upload files] を選んでください。
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><FileText className="w-4 h-4" /></div>
              ファイルを入れる
            </h4>
            <p className="text-sm text-slate-600 ml-9">
              画面の枠内に、PCにある <code className="font-bold">index.html</code> をドラッグ＆ドロップします。
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><CheckCircle2 className="w-4 h-4" /></div>
              保存（コミット）
            </h4>
            <p className="text-sm text-slate-600 ml-9">
              ファイルがリストに表示されたら、下の方にある緑色のボタン <span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded text-xs">Commit changes</span> をクリックします。<br/>
              これでファイルがGitHub上に保存（Pushと同義）されました。
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "公開する：Pages設定",
    shortTitle: "公開設定",
    description: "保存されたファイルをWebサイトとして公開する設定を行います。",
    icon: Globe,
    details: (
      <div className="space-y-4">
        <p>最後にスイッチをONにします。</p>
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-2 w-1/3">場所</th>
                <th className="px-4 py-2">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <Settings className="w-4 h-4 text-slate-500" /> Settings
                </td>
                <td className="px-4 py-3">リポジトリ上部メニューの <strong>[Settings]</strong>（歯車アイコン）をクリック</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-500" /> Pages
                </td>
                <td className="px-4 py-3">左側のサイドバーメニューから <strong>[Pages]</strong> を探してクリック</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-blue-600">Branch設定</td>
                <td className="px-4 py-3">
                  <div className="space-y-2">
                    <p>Build and deployment というセクションにある Branch の設定で、</p>
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                      「None」を <strong className="bg-white px-2 py-0.5 border rounded">[main]</strong> (またはmaster) に変更
                    </div>
                    <p>その隣のフォルダ設定は <code>/ (root)</code> のままでOKです。</p>
                    <p>最後に <strong>[Save]</strong> ボタンを押します。</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4 animate-pulse-slow">
          <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> 完了確認
          </h4>
          <p className="text-sm text-green-700 mb-2">
            設定を保存して1〜2分待ち、ページをリロードすると、同じ画面の上部にURLが表示されます。
          </p>
          <div className="bg-white p-3 rounded text-sm font-mono text-green-800 border border-green-100 break-all text-center">
             https://[ユーザー名].github.io/[リポジトリ名]/
          </div>
          <p className="text-center text-xs text-green-600 mt-2">このURLをクリックして、ページが表示されれば成功です！</p>
        </div>
      </div>
    )
  }
];