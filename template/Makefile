DEV_PATH=/home/dev/projects/{{ department }}/{{ name }}
PREPUB_PATH=/home/prepub/projects/{{ department }}/{{ name }}
ONLINE_PATH=/home/online/projects/{{ department }}/{{ name }}

REMOTE_SERVER=root@ip

SOURCE_FILES=./dist/*

help:
	@echo ""
	@echo "  make preview-dev		# 预览发布内容--测试环境（不会执行发布）"
	@echo "  make preview-prepub	# 预览发布内容--预发环境（不会执行发布）"
	@echo "  make preview-prod		# 预览发布内容--线上环境（不会执行发布）"
	@echo ""
	@echo "  make publish-dev		# 发布到测试环境"
	@echo "  make publish-prepub	# 发布到预发环境"
	@echo "  make publish-prod		# 发布到线上环境"

##############################
# 初始化 git 并推送到 gitlab
# ##############################
init-git:
	@git init
	@git remote add origin git@git.souche.com:fis-projects/{{ department }}-{{ name }}.git
	@git add .
	@git commit -m "init {{ department }}-{{ name }}"
	@git push -u origin master

##############################
# 预览发布文件
##############################
preview-dev:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(DEV_PATH)'
	@rsync -rvI -n --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(DEV_PATH)

preview-prepub:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(PREPUB_PATH)'
	@rsync -rvI -n --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(PREPUB_PATH)

preview-prod:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(ONLINE_PATH)'
	@rsync -rvI -n --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(ONLINE_PATH)

##############################
# 发布
##############################
publish-dev:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(DEV_PATH)'
	rsync -rvI --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(DEV_PATH)
	@echo "Please visit http://explame.dev.com/projects/{{ department }}/{{ name }}"

publish-prepub:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(PREPUB_PATH)'
	rsync -rvI --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(PREPUB_PATH)
	@echo "Please visit http://explame.prepub.com/projects/{{ department }}/{{ name }}"

publish-prod:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(ONLINE_PATH)'
	rsync -rvI --delete-after --progress $(SOURCE_FILES) $(REMOTE_SERVER):$(ONLINE_PATH)
	@echo "Please visit http://explame..com/projects/{{ department }}/{{ name }}"

.PHONY: publish-dev publish-prepub publish-prod preview-dev preview-prepub preview-prod init-git
