import React from 'react';
import { StepData } from './types';
import { Save, FolderGit2, UploadCloud, Globe, AlertTriangle, FileText, Plus, CheckCircle2, Settings } from 'lucide-react';

export const STEPS: StepData[] = [
  {
    id: 1,
    title: "準備：コードを保存",
    shortTitle: "準備",
    description: "Google AI Studioで作ったHTMLコードを、自分のパソコンに保存します。",
    icon: Save,
    tips: [
      "メモ帳(Windows)やテキストエディット(Mac)など、普段使っているテキストエディタでOKです。",
      "必ず半角小文字で index.html にしてください。"
    ],
    details: (
      <div className="space-y-4">
        <p>まず、Google AI StudioのコードをPC上のファイルにします。</p>
        
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <div className="flex gap-3">
            <div className="bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-600 shrink-0">1</div>
            <div>
              <p className="font-medium">コードをコピー</p>
              <p className="text-sm text-slate-600">Google AI Studioで生成されたHTMLコードをコピーします。</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-600 shrink-0">2</div>
            <div>
              <p className="font-medium">貼り付け</p>
              <p className="text-sm text-slate-600">PCのメモ帳やテキストエディタを開き、貼り付けます。</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-600 shrink-0">3</div>
            <div className="w-full">
              <p className="font-medium">保存</p>
              <div className="mt-2 bg-amber-50 p-3 rounded-lg border border-amber-200">
                <div className="flex items-start gap-2 text-sm">
                   <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                   <div>
                     <p className="font-bold text-amber-800 mb-1">重要：ファイル名は「index.html」</p>
                     <p className="text-amber-900 leading-relaxed">
                       必ず半角小文字で <code className="bg-amber-100 px-1 rounded font-bold border border-amber-200">index.html</code> として保存してください。<br/>
                       これ以外の名前（Index.htmlやhome.htmlなど）だと、GitHub Pagesがトップページとして認識してくれません。
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
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm text-sm text-slate-700 space-y-4">
           <div className="flex gap-2">
             <div className="font-bold text-blue-600 whitespace-nowrap">Step 1</div>
             <div>
               画面右上の「＋」アイコンから <span className="inline-block bg-slate-100 px-1 border rounded font-medium">New repository</span> をクリックします。
             </div>
           </div>
           
           <div className="flex gap-2">
             <div className="font-bold text-blue-600 whitespace-nowrap">Step 2</div>
             <div className="w-full">
               <div className="mb-2">
                 <strong>Repository name</strong>：好きな名前を入力します。<br/>
                 <span className="text-slate-500">（例: my-ai-site など。これがURLの一部になります）</span>
               </div>
             </div>
           </div>

           <div className="flex gap-2">
             <div className="font-bold text-blue-600 whitespace-nowrap">Step 3</div>
             <div className="w-full">
               <strong>Public / Private</strong>：
               <ul className="mt-1 ml-4 list-disc space-y-1 text-slate-600">
                 <li><strong>Public</strong>（誰でも見れる）：無料プランでの標準です。</li>
                 <li><strong>Private</strong>（自分だけ見れる）：こちらを選んでもGitHub Pagesは公開できますが、基本はPublicで良いでしょう。</li>
               </ul>
             </div>
           </div>

           <div className="flex gap-2">
             <div className="font-bold text-blue-600 whitespace-nowrap">Step 4</div>
             <div>
               一番下の <span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">Create repository</span> ボタンをクリックします。
             </div>
           </div>
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
        <p>「git push」などのコマンドは使いません。Web画面からアップロードする方法が簡単です。</p>
        
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><Plus className="w-4 h-4" /></div>
              アップロード画面を開く
            </h4>
            <div className="text-sm text-slate-600 ml-9">
              <p className="mb-2">リポジトリ作成直後の画面にある <span className="text-blue-600 underline font-medium">uploading an existing file</span> というリンクをクリックします。</p>
              <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                ※ もし見当たらない場合は、画面上の [Add file] ▼ ボタンを押し、[Upload files] を選んでください。
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><FileText className="w-4 h-4" /></div>
              ファイルを置く
            </h4>
            <p className="text-sm text-slate-600 ml-9">
              画面の枠内に、PCにある <strong>index.html</strong> をドラッグ＆ドロップします。
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><CheckCircle2 className="w-4 h-4" /></div>
              変更を保存（コミット）
            </h4>
            <p className="text-sm text-slate-600 ml-9">
              ファイルがリストに表示されたら、下の方にある <span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">Commit changes</span>（緑色のボタン）をクリックします。<br/>
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
    shortTitle: "公開する",
    description: "GitHub Pagesの設定をONにして、Webサイトとして公開します。",
    icon: Globe,
    details: (
      <div className="space-y-4">
        <p>最後に、保存されたファイルをWebサイトとして公開する設定を行います。</p>
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
                    <p>Build and deployment のセクションにある <strong>Branch</strong> の設定を見ます。</p>
                    <div className="bg-slate-50 p-2 rounded border border-slate-200">
                      「None」を <strong className="bg-white px-2 py-0.5 border rounded">[main]</strong> (またはmaster) に変更して <strong className="bg-white px-2 py-0.5 border rounded">[Save]</strong>
                    </div>
                    <p className="text-xs text-slate-500">※ その隣のフォルダ設定は [ / (root) ] のままでOKです。</p>
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
            設定を保存して1〜2分待ち、同じ画面をリロードすると上部にURLが表示されます。
          </p>
          <div className="bg-white p-3 rounded text-sm font-mono text-green-800 border border-green-100 break-all text-center">
             https://[ユーザー名].github.io/[リポジトリ名]/
          </div>
          <p className="text-center text-xs text-green-600 mt-2">このURLをクリックして、Google AI Studioで作ったページが表示されれば成功です！</p>
        </div>
      </div>
    )
  }
];