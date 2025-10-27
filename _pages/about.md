---
permalink: /
title: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

> [My publication list](https://scholar.google.com/citations?user=R1mNI8QAAAAJ&hl=en)

Shu-wen Yang is a Ph.D. candidate (**final year**) in computer science at [National Taiwan University (NTU)](https://www.ntu.edu.tw/english/), advised by [Prof. Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php) and [Prof. Lin-shan Lee](https://speech.ee.ntu.edu.tw/previous_version/lslNew.htm).
**He is looking for the full-time research scientist position starting at July 2026.**

Shu-wen Yang’s research interests lie in speech representation (understanding/generation), speech-to-speech LLMs (training/post-training), and speech/audio generative models. He has published over 10 papers in top-tier speech/audio conferences and journals, including Interspeech, ICASSP, TASLP, ICML, and ICLR. His research has accumulated over 2,500 citations and an h-index of 14 on Google Scholar. He co-organized the SUPERB benchmark and challenge, which have been adopted by over 40 institutions. He also co-created the S3PRL speech toolkit, which has earned over 2,500 stars on GitHub and is used by more than 170 open-source projects. He gave tutorials on speech representations at NAACL 2022, ICASSP 2022, and Interspeech 2022. He co-organized the SUPERB Challenge @ IEEE SLT 2022 and the SPARKS Workshop @ IEEE ASRU 2023. He received the Google Ph.D. Fellowship in 2024.

(My [Curriculum Vitae](https://drive.google.com/file/d/13MlqgO1dAaqib4jw0zRX7BLNHqYhs7zG/view?usp=sharing))


## Selected Projects

I coordinated (as the research and engineering lead) the initial version of [SUPERB (Speech processing Universal PERformance Benchmark)](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:9yKSN-GCB0IC), where the proposed speech foundation model (SFM) paradigm has influenced numerous works, as seen in additional benchmarks like [SUPERB-SG](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:Tyk-4Ss8FVUC), [SUPERB-prosody](https://arxiv.org/abs/2210.07185), [ML-SUPERB](https://arxiv.org/abs/2305.10615), and [Dynamic-SUPERB](https://arxiv.org/abs/2309.09510). This influence extends to the development of SFMs, such as [Unispeech-SAT](https://arxiv.org/abs/2110.05752), [WavLM](https://arxiv.org/abs/2110.13900), and the compression of SFMs, including [DistilHuBERT](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:qjMakFHDy7sC), [LightHuBERT](https://arxiv.org/abs/2203.15610), and [ARMHuBERT](https://arxiv.org/abs/2305.11685).

I also co-founded the [S3PRL Toolkit](https://github.com/s3prl/s3prl) with [Andy T. Liu (NTU)](https://andi611.github.io/) in 2019, with support and advice from [Hung-yi Lee (NTU)](https://speech.ee.ntu.edu.tw/~hylee/index.php). Throughout several years, I have collaborated with over [40 contributors](https://github.com/s3prl/s3prl/graphs/contributors), to whom I extend my sincere thanks.
The major contributors are highlighted in the [Change Log](https://github.com/s3prl/s3prl?tab=readme-ov-file#change-log). The toolkit supports the pre-training of several classical SSL methods, benchmarking of numerous downstream tasks, and offers the most [comprehensive collection of pre-trained SSL models](https://s3prl.github.io/s3prl/tutorial/upstream_collection.html) to track research history. It is widely used by the community, including toolkits like [ESPnet](https://github.com/espnet/espnet?tab=readme-ov-file#asr-automatic-speech-recognition), [S3PRL-VC](https://github.com/unilight/s3prl-vc) and [numerous open-source projects](https://github.com/s3prl/s3prl/network/dependents).

## Selected Publications

* ### SUPERB: Speech processing Universal PERformance Benchmark

  **<u>Shu-wen Yang</u>**, [Po-Han Chi](https://scholar.google.com/citations?user=SiyicoEAAAAJ&hl=zh-TW), [Yung-Sung Chuang](https://people.csail.mit.edu/yungsung/), [Cheng-I Jeff Lai](https://people.csail.mit.edu/clai24/), [Kushal Lakhotia](https://scholar.google.com/citations?user=w9W6zXUAAAAJ&hl=en), [Yist Y. Lin](https://scholar.google.com/citations?user=0lrZq9MAAAAJ&hl=en), [Andy T. Liu](https://andi611.github.io/), [Jiatong Shi](http://shijt.site/), [Xuankai Chang](https://www.xuankaic.com/), [Guan-Ting Lin](https://daniellin94144.github.io/), Tzu-Hsien Huang, [Wei-Cheng Tseng](https://scholar.google.com.tw/citations?user=-d6aNP0AAAAJ&hl=zh-TW), Ko-tik Lee, [Da-Rong Liu](https://scholar.google.com.tw/citations?user=qJ5zXNIAAAAJ&hl=zh-TW), [Zili Huang](https://scholar.google.com/citations?user=iQ-S0fQAAAAJ&hl=en), Shuyan Dong, [Shang-Wen Li](https://swdanielli.github.io/), [Shinji Watanabe](https://sites.google.com/view/shinjiwatanabe), [Abdelrahman Mohamed](https://www.cs.toronto.edu/~asamir/), [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php)\\
  in **Interspeech**, 2021\\
  [arxiv](https://arxiv.org/abs/2105.01051) / [video](https://www.youtube.com/watch?v=zd9fiVvej0k) / [website](https://superbbenchmark.org/) / [code](https://github.com/s3prl/s3prl)

* ### A Large-Scale Evaluation of Speech Foundation Models

  **<u>Shu-wen Yang</u>**, [Heng-Jui Chang](https://people.csail.mit.edu/hengjui/), [Zili Huang](https://scholar.google.com/citations?user=iQ-S0fQAAAAJ&hl=en), [Andy T. Liu](https://andi611.github.io/), [Cheng-I Lai](https://people.csail.mit.edu/clai24/), [Haibin Wu](https://hbwu-ntu.github.io/), [Jiatong Shi](http://shijt.site/), [Xuankai Chang](https://www.xuankaic.com/), Hsiang-Sheng Tsai, [Wen-Chin Huang](https://unilight.github.io/), Tzu-hsun Feng, [Po-Han Chi](https://scholar.google.com/citations?user=SiyicoEAAAAJ&hl=zh-TW), [Yist Y. Lin](https://scholar.google.com/citations?user=0lrZq9MAAAAJ&hl=en), [Yung-Sung Chuang](https://people.csail.mit.edu/yungsung/), Tzu-Hsien Huang, [Wei-Cheng Tseng](https://scholar.google.com.tw/citations?user=-d6aNP0AAAAJ&hl=zh-TW), [Kushal Lakhotia](https://scholar.google.com/citations?user=w9W6zXUAAAAJ&hl=en), [Shang-Wen Li](https://swdanielli.github.io/), [Abdelrahman Mohamed](https://www.cs.toronto.edu/~asamir/), [Shinji Watanabe](https://sites.google.com/view/shinjiwatanabe), [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php)\\
  in **IEEE/ACM Transactions on Audio Speech and Language Processing**, 2024\\
  [arxiv](https://arxiv.org/abs/2404.09385) (preferred) / [ieee](https://ieeexplore.ieee.org/document/10502279) / [code](https://github.com/s3prl/s3prl)

* ### Generative Audio Language Modeling with Continuous-valued Tokens and Masked Next-Token Prediction

  **<u>Shu-wen Yang</u>**, [Byeonggeun Kim](https://sites.google.com/view/byeonggeun-kim), [Kuan-Po Huang](https://scholar.google.com/citations?user=cgTcTMoAAAAJ&hl=zh-TW), [Qingming Tang](https://home.ttic.edu/~qmtang/), [Huy Phan](https://pquochuy.github.io/), [Bo-Ru Lu](https://nlp.borulu.com/), [Harsha Sundar](https://scholar.google.com/citations?user=2-kP7ZQAAAAJ&hl=zh-TW), [Shalini Ghosh](https://sites.google.com/site/shalinighosh), [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php), [Chieh-Chi Kao](https://scholar.google.com/citations?user=BFP-otkAAAAJ&hl=en), [Chao Wang](https://scholar.google.com/citations?user=Ucw6EJAAAAAJ&hl=en)\\
  in **ICML**, 2025\\
  [arxiv (comming soon)]()


## Visitors

<br>
<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=_zC8YRIFlc0iDXzSA0WLcjUf25Ff878np1ts4X7yzQM&w=200"></script>
