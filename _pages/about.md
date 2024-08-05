---
permalink: /
title: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hi! I am Leo, a Ph.D. candidate in computer science at [National Taiwan University (NTU)](https://www.ntu.edu.tw/english/), advised by [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php) and [Lin-shan Lee](https://speech.ee.ntu.edu.tw/previous_version/lslNew.htm) in the Speech Processing and Machine Learning (SPML) Group.
I am fortunate enough to work with several thoughtful and respectable senior researchers, including [Shinji Watanabe (CMU)](https://sites.google.com/view/shinjiwatanabe) and [Abdelrahman Mohamed (Meta/Rembrand)](https://www.cs.toronto.edu/~asamir/).
I also learn a lot from and am continuously motivated by several strong peers, including [Jiatong Shi (CMU)](http://shijt.site/), [Wen-Chin Huang (Nagoya)](https://unilight.github.io/), and [Andy T. Liu (NTU)](https://andi611.github.io/).
Finally, I enjoy playing the piano in my free time, under the guidance of [Yiin Bin Yang](https://www.linkedin.com/in/yiin-bin-yang-a844267a). (See [my hobbies](./hobbies.md))

(My [Curriculum Vitae](https://drive.google.com/file/d/13MlqgO1dAaqib4jw0zRX7BLNHqYhs7zG/view?usp=sharing))

---

My research is dedicated to developing a human-level perception system that comprehensively understands speech—from acoustics to linguistics—and its interplay with other modalities such as audio, vision, and natural language. My primary direction is on representation learning, a field that has garnered various names recently. My recent efforts concentrate on self-supervised learning, representation generalizability, and efficient pre-training.

- **Self-Supervised Learning (SSL)**: Learning speech representations from unlabeled data. We discover that speech SSL techniques lead to representations with strong task generalizability beyond Automatic Speech Recognition (ASR).
Additionally, we explore their use across a broad spectrum of real-life speech applications, which marks the beginning of the era of speech foundation models (SFM).

- **Representation Generalizability**: Benchmarking the task and domain generalizability of SFMs. I think deeply about the purpose and methods of creating a correct and solidly grounded benchmark, especially regarding its important role in guiding future model development.

- **Efficient Pre-training**: All existing SFMs require industrial-level computing, which makes further research monopolized by large corporations. I am currently working on how to pre-train SFMs efficiently within academic resources.

---

I coordinated (as the research and engineering lead) the initial version of [SUPERB (Speech processing Universal PERformance Benchmark)](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:9yKSN-GCB0IC), where the proposed speech foundation model (SFM) paradigm has influenced numerous works, as seen in additional benchmarks like [SUPERB-SG](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:Tyk-4Ss8FVUC), [SUPERB-prosody](https://arxiv.org/abs/2210.07185), [ML-SUPERB](https://arxiv.org/abs/2305.10615), and [Dynamic-SUPERB](https://arxiv.org/abs/2309.09510). This influence extends to the development of SFMs, such as [Unispeech-SAT](https://arxiv.org/abs/2110.05752), [WavLM](https://arxiv.org/abs/2110.13900), and the compression of SFMs, including [DistilHuBERT](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=R1mNI8QAAAAJ&citation_for_view=R1mNI8QAAAAJ:qjMakFHDy7sC), [LightHuBERT](https://arxiv.org/abs/2203.15610), and [ARMHuBERT](https://arxiv.org/abs/2305.11685).

I also co-founded the [S3PRL Toolkit](https://github.com/s3prl/s3prl) with [Andy T. Liu (NTU)](https://andi611.github.io/) in 2019, with support and advice from [Hung-yi Lee (NTU)](https://speech.ee.ntu.edu.tw/~hylee/index.php). Throughout several years, I have collaborated with over [40 contributors](https://github.com/s3prl/s3prl/graphs/contributors), to whom I extend my sincere thanks.
The major contributors are highlighted in the [Change Log](https://github.com/s3prl/s3prl?tab=readme-ov-file#change-log). The toolkit supports the pre-training of several classical SSL methods, benchmarking of numerous downstream tasks, and offers the most [comprehensive collection of pre-trained SSL models](https://s3prl.github.io/s3prl/tutorial/upstream_collection.html) to track research history. It is widely used by the community, including toolkits like [ESPnet](https://github.com/espnet/espnet?tab=readme-ov-file#asr-automatic-speech-recognition), [S3PRL-VC](https://github.com/unilight/s3prl-vc) and [numerous open-source projects](https://github.com/s3prl/s3prl/network/dependents).

I am always open to collaborations involving dense and deep discussions, where I can learn from new explorations and intense debates regardless of co-authorship.
If you are interested in collaborating, please reach me at my email: [leo19941227@gmail.com](mailto:leo19941227@gmail.com).


## Selected Publications

* ### SUPERB: Speech processing Universal PERformance Benchmark

  **<u>Shu-wen Yang</u>**, [Po-Han Chi](https://scholar.google.com/citations?user=SiyicoEAAAAJ&hl=zh-TW), [Yung-Sung Chuang](https://people.csail.mit.edu/yungsung/), [Cheng-I Jeff Lai](https://people.csail.mit.edu/clai24/), [Kushal Lakhotia](https://scholar.google.com/citations?user=w9W6zXUAAAAJ&hl=en), [Yist Y. Lin](https://scholar.google.com/citations?user=0lrZq9MAAAAJ&hl=en), [Andy T. Liu](https://andi611.github.io/), [Jiatong Shi](http://shijt.site/), [Xuankai Chang](https://www.xuankaic.com/), [Guan-Ting Lin](https://daniellin94144.github.io/), Tzu-Hsien Huang, [Wei-Cheng Tseng](https://scholar.google.com.tw/citations?user=-d6aNP0AAAAJ&hl=zh-TW), Ko-tik Lee, [Da-Rong Liu](https://scholar.google.com.tw/citations?user=qJ5zXNIAAAAJ&hl=zh-TW), [Zili Huang](https://scholar.google.com/citations?user=iQ-S0fQAAAAJ&hl=en), Shuyan Dong, [Shang-Wen Li](https://swdanielli.github.io/), [Shinji Watanabe](https://sites.google.com/view/shinjiwatanabe), [Abdelrahman Mohamed](https://www.cs.toronto.edu/~asamir/), [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php)\\
  in **Interspeech**, 2021\\
  [arxiv](https://arxiv.org/abs/2105.01051) / [video](https://www.youtube.com/watch?v=zd9fiVvej0k) / [website](https://superbbenchmark.org/) / [code](https://github.com/s3prl/s3prl)

* ### A Large-Scale Evaluation of Speech Foundation Models

  **<u>Shu-wen Yang</u>**, [Heng-Jui Chang](https://people.csail.mit.edu/hengjui/), [Zili Huang](https://scholar.google.com/citations?user=iQ-S0fQAAAAJ&hl=en), [Andy T. Liu](https://andi611.github.io/), [Cheng-I Lai](https://people.csail.mit.edu/clai24/), [Haibin Wu](https://hbwu-ntu.github.io/), [Jiatong Shi](http://shijt.site/), [Xuankai Chang](https://www.xuankaic.com/), Hsiang-Sheng Tsai, [Wen-Chin Huang](https://unilight.github.io/), Tzu-hsun Feng, [Po-Han Chi](https://scholar.google.com/citations?user=SiyicoEAAAAJ&hl=zh-TW), [Yist Y. Lin](https://scholar.google.com/citations?user=0lrZq9MAAAAJ&hl=en), [Yung-Sung Chuang](https://people.csail.mit.edu/yungsung/), Tzu-Hsien Huang, [Wei-Cheng Tseng](https://scholar.google.com.tw/citations?user=-d6aNP0AAAAJ&hl=zh-TW), [Kushal Lakhotia](https://scholar.google.com/citations?user=w9W6zXUAAAAJ&hl=en), [Shang-Wen Li](https://swdanielli.github.io/), [Abdelrahman Mohamed](https://www.cs.toronto.edu/~asamir/), [Shinji Watanabe](https://sites.google.com/view/shinjiwatanabe), [Hung-yi Lee](https://speech.ee.ntu.edu.tw/~hylee/index.php)\\
  in **IEEE/ACM Transactions on Audio Speech and Language Processing**, 2024\\
  [arxiv](https://arxiv.org/abs/2404.09385) (preferred) / [ieee](https://ieeexplore.ieee.org/document/10502279) / [code](https://github.com/s3prl/s3prl)


## Visitors

<br>
<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=_zC8YRIFlc0iDXzSA0WLcjUf25Ff878np1ts4X7yzQM&w=200"></script>
