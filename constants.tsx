import React from 'react';
import { StepData } from './types';
import { Github, Globe, Settings, ArrowRight, CheckCircle2, LogIn, MousePointerClick, Lock, Globe2, AlertTriangle, FolderOpen } from 'lucide-react';

export const STEPS: StepData[] = [
  {
    id: 1,
    title: "送信：アイコンをクリック",
    shortTitle: "アイコンクリック",
    description: "Google AI Studioのヘッダーにあるボタンから、直接GitHubへ保存します。",
    icon: Github,
    tips: [
      "「Public」を選ばないと、GitHub Pagesで公開する際に設定が少し複雑になる場合があります。",
      "リポジトリ名はURLの一部になります。"
    ],
    details: (
      <div className="space-y-4">
        <p>画面上部のアイコンをクリックするだけで、GitHubへの保存画面を呼び出せます。</p>
        
        {/* Important Warning about File Structure */}
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2">
             <AlertTriangle className="w-4 h-4" />
             送る前の重要チェック！
          </h4>
          <div className="flex gap-3 items-start">
            <FolderOpen className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div className="text-sm text-amber-900">
              <p className="font-bold mb-1">index.html は「一番上」にありますか？</p>
              <p>
                フォルダの中に入れず、ファイルリストの一番上の階層（ルート）に置いてください。<br/>
                フォルダの中にあると、この後の公開設定で失敗してしまいます。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <div className="flex gap-3">
            <div className="bg-slate-100 p-2 h-fit rounded-full">1</div>
            <div>
              <p className="font-medium flex items-center gap-2">
                GitHubアイコンをクリック
                <Github className="w-4 h-4 inline" />
              </p>
              <p className="text-sm text-slate-600 mt-1">
                画面の上部（ヘッダー部分）にある、GitHubのロゴマーク（猫のシルエット）をクリックします。
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-slate-100 p-2 h-fit rounded-full">2</div>
            <div>
              <p className="font-medium">作成設定を入力</p>
              <div className="mt-2 space-y-2 text-sm text-slate-600 bg-slate-50 p-3 rounded border border-slate-100">
                <div className="grid grid-cols-[120px_1fr] gap-2 items-center">
                  <span className="font-semibold text-slate-700">Repository name</span>
                  <span>好きな名前を入力 (例: <code className="bg-white px-1 border rounded">my-app</code>)</span>
                  
                  <span className="font-semibold text-slate-700">Visibility</span>
                  <span className="flex items-center gap-1">
                     <Globe2 className="w-3 h-3" />
                     <strong>Public</strong> を選択 (推奨)
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                ※ Publicにすると誰でもコードが見れるようになりますが、Webサイトとして無料公開するのに一番簡単です。
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="bg-slate-100 p-2 h-fit rounded-full">3</div>
            <div>
              <p className="font-medium">Create Git repo</p>
              <p className="text-sm text-slate-600 mb-2">
                右下の <strong>[Create Git repo]</strong> ボタンをクリックします。
              </p>
              <div className="bg-green-50 text-green-800 text-xs p-2 rounded border border-green-200">
                <CheckCircle2 className="w-3 h-3 inline mr-1" />
                処理が終わると、作成されたGitHubのページを開くリンクが表示されます。それをクリックして次へ進んでください。
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "公開：Pagesの設定",
    shortTitle: "公開設定",
    description: "作成されたリポジトリでWebサイトとして公開するスイッチをONにします。",
    icon: Globe,
    details: (
      <div className="space-y-4">
        <p>GitHubのリポジトリ画面が開いている状態からスタートします。</p>
        
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-2">場所</th>
                <th className="px-4 py-2">アクション</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <Settings className="w-4 h-4 text-slate-500" />
                  Settings
                </td>
                <td className="px-4 py-3">
                  画面上部タブの右側にある <strong>[Settings]</strong> をクリック
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-500" />
                  Pages
                </td>
                <td className="px-4 py-3">
                  左サイドバーメニューの下の方にある <strong>[Pages]</strong> をクリック
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-blue-600">Branch設定</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center">
                      Build and deployment > Branch の下の
                      <br/>
                      「None」を <strong className="ml-1">[main]</strong> に変更
                    </span>
                    <span className="text-xs text-amber-700 mt-1 bg-amber-50 p-1 rounded">
                      ※ フォルダ設定は [ / (root) ] のままにします。<br/>
                      （index.htmlが一番上にあるためです）
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center py-4">
          <div className="inline-flex items-center bg-slate-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-slate-700 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2" />
            [ Save ] ボタンを押して完了！
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
          <p className="text-sm text-blue-700 mb-2">
            1〜2分待ってリロードすると、Settings > Pages 画面の上部にURLが表示されます。
          </p>
          <div className="bg-white/50 p-2 rounded text-xs font-mono text-blue-900 break-all">
            https://[ユーザー名].github.io/[リポジトリ名]/
          </div>
        </div>
      </div>
    )
  }
];