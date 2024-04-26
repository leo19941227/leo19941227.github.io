---
permalink: /
title: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hi! I am a 3th year Ph.D. student in computer science at [National Taiwan University (NTU)](https://www.ntu.edu.tw/english/), advised by [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php) and [Lin-shan Lee](https://speech.ee.ntu.edu.tw/previous_version/lslNew.htm) in the Speech Processing and Machine Learning (SPML) Group. I am fortunate enough to work with several thoughtful and respectable senior researchers, including [Shinji Watanabe (CMU)](https://sites.google.com/view/shinjiwatanabe) and [Abdelrahman Mohamed (Meta/Rembrand)](https://www.cs.toronto.edu/~asamir/).
I also learn a lot from and continuously motivated by several strong peers, including [Jiatong Shi (CMU)](http://shijt.site/), [Wen-Chin Huang (Nagoya)](https://unilight.github.io/) and [Andy T. Liu (NTU)](https://andi611.github.io/).
Finally, I enjoy playing the piano in my free time and draw unlimited inspiration from the connection between music and research on delivering meaningful messages, all thanks to my piano teacher, [Yiin-bin Yang](https://www.linkedin.com/in/yiin-bin-yang-a844267a/?originalSubdomain=en).

My endless pursuit of research involves developing human-level perception systems, including general speech understanding capabilities (from acoustics to linguistics), and their interplay with other modalities such as audio (sounds and music), vision, and natural language.
My primary research direction is **representation learning**, with recent focuses on self-supervised learning, universality benchmarking, and efficient foundation modeling.

- **Self-Supervised Learning (SSL)**: Learning speech representations from unlabeled data. We discover that speech SSL techniques lead to representations with strong task generalizability beyond Automatic Speech Recognition (ASR). Additionally, we explore their usage across a broad spectrum of speech processing tasks, which results in the development of speech foundation models.

- **Universality Benchmarking**: Benchmarking the task/domain generalizability (universality) of speech representations. I think deeply about the purpose and methods of creating a solid and grounded benchmark, especially regarding its important role in guiding future model development.


- **Efficient Foundation Modeling**: All existing speech foundation models require industrial-level computing, which makes further research infeasible. I am currently working on how to pre-train speech foundation models efficiently within academic resources.

I coordinated (as research and engineering lead) the initial version of the [Speech Processing Universal Performance Benchmark (SUPERB)](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:9yKSN-GCB0IC), whose paradigm has influenced a series of works related to speech foundation models, including more benchmarks (e.g. [SUPERB-SG](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:Tyk-4Ss8FVUC), [SUPERB-prosody](https://arxiv.org/abs/2210.07185), [ML-SUPERB](https://arxiv.org/abs/2305.10615), [Dynamic-SUPERB](https://arxiv.org/abs/2309.09510)), the development of speech foundation models (e.g. [Unispeech-SAT](https://arxiv.org/abs/2110.05752), [WavLM](https://arxiv.org/abs/2110.13900)), and compressing speech foundation models (e.g. [DistilHuBERT](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:qjMakFHDy7sC), [LightHuBERT](https://arxiv.org/abs/2203.15610), [ARMHuBERT](https://arxiv.org/abs/2305.11685)).


I also co-founded the [S3PRL Toolkit](https://github.com/s3prl/s3prl) with [Andy T. Liu (NTU)](https://andi611.github.io/), collaborating with over [40 contributors](https://github.com/s3prl/s3prl/graphs/contributors) (sincere thanks to all the collaborators). The major contributors are highlighted in the [Change Log](https://github.com/s3prl/s3prl?tab=readme-ov-file#change-log). The toolkit supports pre-training several classical SSL methods, downstream task benchmarking, and the most comprehensive pre-trained SSL models to track research history. It is widely used by the community, including [ESPNet](https://github.com/espnet/espnet?tab=readme-ov-file#asr-automatic-speech-recognition) and [numerous open-source projects](https://github.com/s3prl/s3prl/network/dependents).

If you have questions or are interested in collaborations, please reach me at my email: <ins>leo19941227@gmail.com</ins>


## Selected Publications

* **Speech Processing Universal Performance Benchmark**\\
  **<u>Shu-wen Yang</u>**, [Po-Han Chi](https://scholar.google.com/citations?user=SiyicoEAAAAJ&hl=zh-TW), [Yung-Sung Chuang](https://people.csail.mit.edu/yungsung/), [Cheng-I Jeff Lai](https://people.csail.mit.edu/clai24/), [Kushal Lakhotia](https://scholar.google.com/citations?user=w9W6zXUAAAAJ&hl=en), [Yist Y. Lin](https://scholar.google.com/citations?user=0lrZq9MAAAAJ&hl=en), [Andy T. Liu](https://andi611.github.io/), [Jiatong Shi](http://shijt.site/), [Xuankai Chang](https://scholar.google.com/citations?user=cIl2jpMAAAAJ&hl=en), [Guan-Ting Lin](https://daniellin94144.github.io/), Tzu-Hsien Huang, [Wei-Cheng Tseng](https://scholar.google.com.tw/citations?user=-d6aNP0AAAAJ&hl=zh-TW), Ko-tik Lee, [Da-Rong Liu](https://scholar.google.com.tw/citations?user=qJ5zXNIAAAAJ&hl=zh-TW), [Zili Huang](https://scholar.google.com/citations?user=iQ-S0fQAAAAJ&hl=en), Shuyan Dong, [Shang-Wen Li](https://swdanielli.github.io/), [Shinji Watanabe](https://sites.google.com/view/shinjiwatanabe), [Abdelrahman Mohamed](https://www.cs.toronto.edu/~asamir/), [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php)\\
  *Interspeech 2021*\\
  [bib](https://www.isca-archive.org/interspeech_2021/yang21c_interspeech.html) / [arxiv](https://arxiv.org/abs/2105.01051) / [video](https://www.youtube.com/watch?v=zd9fiVvej0k) / [website](https://superbbenchmark.org/) / [code](https://github.com/s3prl/s3prl)

* **A Large-Scale Evaluation of Speech Foundation Models**\\
  **<u>Shu-wen Yang</u>**, [Heng-Jui Chang](https://people.csail.mit.edu/hengjui/), [Zili Huang](https://scholar.google.com/citations?user=iQ-S0fQAAAAJ&hl=en), [Andy T. Liu](https://andi611.github.io/), [Cheng-I Lai](https://people.csail.mit.edu/clai24/), [Haibin Wu](https://hbwu-ntu.github.io/), [Jiatong Shi](http://shijt.site/), [Xuankai Chang](https://scholar.google.com/citations?user=cIl2jpMAAAAJ&hl=en), Hsiang-Sheng Tsai, [Wen-Chin Huang](https://unilight.github.io/), Tzu-hsun Feng, [Po-Han Chi](https://scholar.google.com/citations?user=SiyicoEAAAAJ&hl=zh-TW), [Yist Y. Lin](https://scholar.google.com/citations?user=0lrZq9MAAAAJ&hl=en), [Yung-Sung Chuang](https://people.csail.mit.edu/yungsung/), Tzu-Hsien Huang, [Wei-Cheng Tseng](https://scholar.google.com.tw/citations?user=-d6aNP0AAAAJ&hl=zh-TW), [Kushal Lakhotia](https://scholar.google.com/citations?user=w9W6zXUAAAAJ&hl=en), [Shang-Wen Li](https://swdanielli.github.io/), [Abdelrahman Mohamed](https://www.cs.toronto.edu/~asamir/), [Shinji Watanabe](https://sites.google.com/view/shinjiwatanabe), [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php)\\
  *IEEE/ACM Transactions on Audio Speech and Language Processing 2024*\\
  [bib](https://scholar.googleusercontent.com/scholar.bib?q=info:9qlEbq1pkpYJ:scholar.google.com/&output=citation&scisdr=ClE8GXHwEIvNypv8C90:AFWwaeYAAAAAZiv6E93CpXURRNTilM_jICkFP-o&scisig=AFWwaeYAAAAAZiv6E1b7dGoK3wbSaVwBbrj2KWA&scisf=4&ct=citation&cd=-1&hl=en&scfhb=1) / [arxiv (prefered)](https://arxiv.org/abs/2404.09385) / [ieee xplore](https://ieeexplore.ieee.org/abstract/document/10502279) / [code](https://github.com/s3prl/s3prl)
